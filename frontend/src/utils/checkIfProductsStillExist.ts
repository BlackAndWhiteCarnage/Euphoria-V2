/**
 * Internal dependencies
 */
import { CartItemType } from 'contexts/CartContext';

export const findProduct = async (slug: string) => {
	const fetchProduct = await fetch(
		`http://localhost:2000/api/products?filters[slug][$eq]=${slug}`
	);
	const data = await fetchProduct.json();

	return data.data.length > 0 ? data.data[0].attributes.slug : '';
};

export const checkIfProductsStillExist = async (
	products: Array<CartItemType | string>
) => {
	const arr = await Promise.all(
		products.map((product) => {
			return findProduct(typeof product === 'string' ? product : product.slug);
		})
	);

	return arr;
};
