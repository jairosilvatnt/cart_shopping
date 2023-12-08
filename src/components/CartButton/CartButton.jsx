import React, { useContext } from "react";
import { GrCart } from "react-icons/gr";
import "./CartButton.css";
import AppContext from "../Context/AppContext";


function CartButton() {

	const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

	return(
		<button 
			type="button" 
			className="cart__button"
			onClick={ () => setIsCartVisible(!isCartVisible) }
		>
			<GrCart />
			{ cartItems.length > 0 && <span className="cart-status">{ cartItems.length}</span>}
		</button>
	);
}

export default CartButton;


