const formatPrice = (
	price: number,
	currency: string = 'PLN',
	locale: string = 'pl-PL'
) =>
	new Intl.NumberFormat(locale, {
		currency,
		style: 'currency',
	}).format(price);

export default formatPrice;
