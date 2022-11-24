/**
 * Internal dependencies
 */
import { useStateContext, CartItemType } from 'contexts/CartContext';

const useGetProductsToDelete = () => {
	const { cart } = useStateContext();

	const filterItems = cart.filter((el: CartItemType) => el.extras !== null);

	const arrOfSlugsToDelete: Array<string> = [];

	filterItems.map(({ slug }: CartItemType) => arrOfSlugsToDelete.push(slug));

	return arrOfSlugsToDelete.toString();
};

export default useGetProductsToDelete;
