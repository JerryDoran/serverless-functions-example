const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/basic-api-2');
    const { data } = await axios.get('/api/basic-api-2');
    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;

        return `
        <article class="product">
          <img src=${url} alt=${name} />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
          </div>
        </article>
      `;
      })
      .join('');
    result.innerHTML = products;
  } catch (e) {
    result.innerHTML = `<h2>There was an error!</h2>`;
  }
};

fetchData();
