import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartButton/CartButton";
import "../Header/header.css";


const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<SearchBar />
				<CartButton />
			</div>
		</header>
	);
};

export default Header;
