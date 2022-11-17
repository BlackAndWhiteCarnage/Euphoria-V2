const getNestedProductData = (nestedData: any) => {
	const { title, price, extras, isPremium, imagesCount, images } =
		nestedData.products.data[0].attributes;

	return { title, price, extras, isPremium, imagesCount, images };
};

export default getNestedProductData;
