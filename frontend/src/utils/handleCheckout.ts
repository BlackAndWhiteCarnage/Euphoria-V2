/**
 * Internal dependencies
 */
import { CartItemType } from 'contexts/CartContext';
import { hasOnlyPhotoshoots } from 'utils';
import getStripe from 'config/getStripe';

const handleCheckout = async (
	cart: Array<CartItemType>,
	isFreeShipping: boolean,
	location?: any,
	productsToDelete?: string
) => {
	const stripe = await getStripe();

	const onlyPhotoshoots = hasOnlyPhotoshoots(cart);

	const amount = isFreeShipping ? 0 : 13.99 * 100;

	const unit = onlyPhotoshoots ? 'hour' : 'business_day';
	const value = onlyPhotoshoots ? 2 : 14;
	const phoneRequirement = !onlyPhotoshoots;
	const display_name = onlyPhotoshoots
		? 'Przesyłka elektroniczna (usostępniane na Dysku Google)'
		: 'Paczkomat Inpost';

	const response = await fetch('/api/stripe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			cart,
			location,
			productsToDelete,
			phoneRequirement,
			shipping: {
				type: 'fixed_amount',
				fixed_amount: {
					amount,
					currency: 'pln',
				},
				display_name,
				delivery_estimate: {
					minimum: {
						unit,
						value: 1,
					},
					maximum: {
						unit,
						value,
					},
				},
			},
		}),
	});

	const data = await response.json();

	await stripe?.redirectToCheckout({ sessionId: data.id });
};

export default handleCheckout;
