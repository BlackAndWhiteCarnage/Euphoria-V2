/**
 * Internal dependencies
 */
import { getShipping } from 'utils';
import getStripe from 'config/getStripe';

const handleCheckout = async (cart: Array<any>) => {
	const stripe = await getStripe();

	const response = await fetch('/api/stripe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			cart,
			shipping: getShipping(cart),
		}),
	});

	const data = await response.json();

	await stripe?.redirectToCheckout({ sessionId: data.id });
};

export default handleCheckout;
