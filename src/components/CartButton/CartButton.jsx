import React from "react";
import { GrCart } from "react-icons/gr";
import "./CartButton.css";


const CartButton = () => {
	return(
		<button type="button" className="cart__button">
			<GrCart />
			<span className="cart-status">1</span>
		</button>
	);
};

export default CartButton;
