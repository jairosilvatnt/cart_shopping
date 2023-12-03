const mercadoLivreAPI = "https://api.mercadolibre.com";

const fetchProducts = async (query) => {
	const response = await fetch(`${mercadoLivreAPI}/sites/MLA/search?q=${query}`);
	const data = await response.json();
	return data.results;

};

export default fetchProducts;
