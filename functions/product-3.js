const Airtable = require('airtable-node');
require('dotenv').config();

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appMZMcb2dze3kztI')
  .table('products');

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (e) {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 500,
        body: `Server error`,
      };
    }
  }
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 400,
    body: `Please provide a product id`,
  };
};
