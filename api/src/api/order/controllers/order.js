"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

// Initialize Stripe with environment variable
let stripe;
try {
  if (!process.env.STRIPE_KEY) {
    console.warn('STRIPE_KEY is not set. Stripe functionality will be disabled.');
  } else {
    const stripeLib = require('stripe');
    stripe = stripeLib(process.env.STRIPE_KEY);
  }
} catch (error) {
  console.error('Failed to initialize Stripe:', error.message);
}

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // Check if Stripe is properly initialized
    if (!stripe) {
      ctx.status = 500;
      return {
        error: 'Payment processing is currently unavailable. Please try again later.'
      };
    }

    const { products } = ctx.request.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      ctx.status = 400;
      return {
        error: 'No products provided in the request'
      };
    }

    try {
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
            .findOne(product.id, { populate: "*" });

          console.log("Found product:", productResult);

          if (!productResult) {
            console.error(`Product with ID ${product.id} not found`);
            throw new Error(`Product with ID ${product.id} not found`);
          }

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: productResult.title,
                images: productResult.images?.map((img) => img.url) || [],
                description: productResult.desc || "",
              },
              unit_amount: Math.round(productResult.price * 100), // Convert to cents
            },
            quantity: product.quantity,
          };
        })
      );

      if (!process.env.CLIENT_URL) {
        throw new Error('CLIENT_URL environment variable is not set');
      }

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

      // Create order in database
      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      console.error('Error in order creation:', error);
      ctx.status = error.status || 500;
      return {
        error: error.message || 'An error occurred while processing your order',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      };
    }
  },
}));
