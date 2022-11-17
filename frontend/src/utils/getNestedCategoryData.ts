const getNestedCategoryData = (nestedData: any) =>
	nestedData.categories.data[0].attributes.products.data;

export default getNestedCategoryData;
