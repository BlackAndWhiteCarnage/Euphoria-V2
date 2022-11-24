const deleteProduct = async (slug: string) => {
	const findProduct = await fetch(
		`http://localhost:2000/api/products?filters[slug][$eq]=${slug}`
	);
	const data = await findProduct.json();

	await fetch(`http://localhost:2000/api/products/${data.data[0].id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
		},
	});
};

export default deleteProduct;
