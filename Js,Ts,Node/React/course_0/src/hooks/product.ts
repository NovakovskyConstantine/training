import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function addProduct(product: IProduct) {
		setProducts(prev => [...prev, product]);
	}

	async function getProducts() {
		try{
			setError("");
			setLoading(true);
			const responce = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=5");
			setProducts(responce.data);
			setLoading(false);
		} catch(e) {
			const error = e as AxiosError;
			setLoading(false);
			setError(error.message);
		}
		
	}

	useEffect(() => {
		getProducts();
	}, []);	

    return { products, error, loading, addProduct };
}