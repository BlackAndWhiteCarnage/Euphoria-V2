/**
 * Internal dependencies
 */
import { calcPrice, calcExtrasPrice, hasOnlyPhotoshoots } from 'utils';

const getShipping = (cart: any) => {
	const onlyPhotoshoots = hasOnlyPhotoshoots(cart);

	const amount = onlyPhotoshoots
		? 0
		: calcPrice(cart) + calcExtrasPrice(cart) <= 150
		? 13.99 * 100
		: 0;

	const unit = onlyPhotoshoots ? 'hour' : 'business_day';
	const value = onlyPhotoshoots ? 2 : 14;
	const display_name = onlyPhotoshoots
		? 'Przesyłka elektroniczna (usostępniane na Dysku Google)'
		: 'Paczkomat Inpost';

	return {
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
	};
};

export default getShipping;
