import React from "react";
import {FaCartArrowDown} from "react-icons/fa";
import "./CartButton.css";


const CartButton = () => {
	return(
		<button type="button" className="cart__button">
			<FaCartArrowDown />
			<span className="cart-status">1</span>
		</button>
	);
};

export default CartButton;
