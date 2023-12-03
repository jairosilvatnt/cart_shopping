import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

function Cart() {
	const {cartItems} = useContext(AppContext);

	return (
		<section className="cart">
			<div className="cart-itens">
				{cartItems.map((cartItem) =><CartItem key={cartItem.id} data={cartItems} />)};
			</div>

			<div className="cart-resume">Resumo do carrinho</div>
		</section>
	);
}

export default Cart;


