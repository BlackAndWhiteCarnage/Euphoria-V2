/**
 * Internal dependencies
 */
import formatPrice from './formatPrice';

const substractPriceByPercentage = (price: number, percentage: number) =>
	formatPrice(price * (1 - percentage / 100));

export default substractPriceByPercentage;
