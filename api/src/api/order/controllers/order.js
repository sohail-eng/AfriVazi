"use strict";

const stripe = require("stripe")(process.env.STRIPE_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    // Debug: Log all products in the database
    const allProducts = await strapi
      .service("api::product.product")
      .find({ publicationState: "preview" });
    console.log(
      "All products in DB:",
      allProducts.results.map((p) => ({ id: p.id, title: p.title }))
    );

    const lineItems = await Promise.all(
      products.map(async (product) => {
        console.log("Looking for product id:", product.id, typeof product.id);
        const productResult = await strapi
          .service("api::product.product")
          .find({
            filters: { id: product.id },
            publicationState: "preview",
          });
        const item = productResult.results[0];

        if (!item) {
          throw new Error(`Product with id ${product.id} not found`);
        }

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.quantity,
        };
      })
    );

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        payment_method_types: ["card"],
      });

      const order = await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      console.error(error); // Log the error for debugging
      ctx.response.status = 500;
      ctx.body = { error: error.message };
    }
  },
}));
