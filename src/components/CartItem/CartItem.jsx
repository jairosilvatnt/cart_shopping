import React from "react";
import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "../../uttils/formatCurrency";
import propTypes from "prop-types";
import "./CartItem.css";

function CartItem({ data }) {

	const { title, thumbnail, price } = data;

	return (
		<section className="cart-item">
			<img
				src={thumbnail}
				alt="imagem do produto"
				className="cart-item-image"
			/>

			<div className="cart-item-content">
				<h3 className="cart-item-title">{title}</h3>
				<h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
				<button 
					type="button" 
					className="button-remove-item"
				>
					<BsCartDashFill />
				</button>
			</div>
		</section>
	);
}

export default CartItem;

CartItem.propTypes = {
	data: propTypes.object
}.isRequired;
