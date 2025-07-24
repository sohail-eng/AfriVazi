module.exports = () => ({
  'strapi-csv-import-export': {
    config: {
      authorizedExports: [
        'api::product.product',
        'api::category.category',
        'api::sub-category.sub-category',
        'api::order.order'
      ],
      authorizedImports: [
        'api::product.product',
        'api::category.category',
        'api::sub-category.sub-category',
        'api::order.order'
      ]
    }
  }
});
