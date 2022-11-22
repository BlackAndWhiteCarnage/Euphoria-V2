const calcExtrasPrice = (cart: Array<any>) => {
	const moreExtras: Array<number | never> = [];

	cart.forEach(({ count, extras }) => {
		if (!extras) return;

		count < extras.length && moreExtras.push(extras.length - count);
	});

	if (moreExtras.length < 1) return 0;
	return moreExtras.reduce((a, b) => a + b) * 10;
};

export default calcExtrasPrice;
