import React, { useEffect, useContext } from "react";
import fetchProducts from "../../api/fetchProducts";
import  "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../Context/AppContext";


const Products = () => {
	const { products, setProducts ,loading, setLoading} = useContext(AppContext);

	useEffect(() => {
		fetchProducts("iphone").then((response) => {
			setProducts(response);
			setLoading(false);
		});
	}, []);

	return (
		(loading && <Loading/>) || (
			<section className="products container">			
				{
					products.map((product) => <ProductCard key={product._id} data={product} /> )
				}
			</section>
		)		
	);
};

export default Products;
