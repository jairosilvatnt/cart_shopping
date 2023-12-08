import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../Context/AppContext";
import "./SearchBar.css";


function SearchBar() {
	const { setProducts, setLoading } = useContext(AppContext);
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = async (event) => {
		event.preventDefault();
		setLoading(true);

		const products = await fetchProducts(searchValue);

		setProducts(products);
		setLoading(false);
		setSearchValue("");
	};

	return (
		<form className="search-bar" onSubmit={handleSearch}>
			{name}
			<input type="search"
				value={searchValue}
				placeholder="Buscar produtos" className="search__input"
				onChange={({ target }) => setSearchValue(target.value)} required
			/>

			<button type="submit"
				className="search__button">
				<BiSearch />
			</button>
		</form>
	);
}

export default SearchBar;
