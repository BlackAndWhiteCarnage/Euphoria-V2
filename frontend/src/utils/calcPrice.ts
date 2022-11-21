const calcPrice = (cart: Array<any>) => {
	const prices: Array<number> = [];

	cart.forEach(({ price }) => {
		prices.push(price);
	});

	return prices.reduce((a, b) => a + b);
};

export default calcPrice;
