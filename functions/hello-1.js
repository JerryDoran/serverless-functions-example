exports.handler = async (event, context) => {
  console.log(event);
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: 'My first Netlify function!',
  };
};
