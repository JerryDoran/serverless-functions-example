
const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/hello-1');
    const { data } = await axios.get('/api/hello-1');
    result.textContent = data;
    console.log(data);
  } catch (e) {
    console.log(e.response);
    result.textContent = e.response.data;
  }
};

fetchData();
