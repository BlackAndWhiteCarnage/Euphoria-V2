const calcPrice = (cart: Array<any>) => {
	const prices: Array<number> = [];

	cart.forEach(({ basePrice }) => {
		prices.push(basePrice);
	});

	return prices.reduce((a, b) => a + b);
};

export default calcPrice;
