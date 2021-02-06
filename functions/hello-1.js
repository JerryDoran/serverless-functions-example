exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: 'My first Netlify function!',
  };
};
