const hasOnlyPhotoshoots = (cart: Array<any>) =>
	cart.every((el) => el.extras === null);

export default hasOnlyPhotoshoots;
