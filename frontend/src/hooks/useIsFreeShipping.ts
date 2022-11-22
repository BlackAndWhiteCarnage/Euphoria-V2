/**
 * Internal dependencies
 */
import { calcPrice, calcExtrasPrice, hasOnlyPhotoshoots } from 'utils';
import { useStateContext } from 'contexts/CartContext';

const useIsFreeShipping = () => {
	const { cart, freeShippingTreshold } = useStateContext();

	if (cart.length < 1) return false;

	return (
		calcPrice(cart) + calcExtrasPrice(cart) >= freeShippingTreshold ||
		hasOnlyPhotoshoots(cart)
	);
};

export default useIsFreeShipping;
