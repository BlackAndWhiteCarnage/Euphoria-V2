export const formatPrice = (
	price: number,
	currency: string = 'PLN',
	locale: string = 'pl-PL'
) =>
	new Intl.NumberFormat(locale, {
		currency,
		style: 'currency',
	}).format(price);

export const substractPriceByPercentage = (price: number, percentage: number) =>
	formatPrice(price * (1 - percentage / 100));
