const deleteProduct = async (slug: string) => {
	const findProduct = await fetch(
		`${process.env.NEXT_PUBLIC_URL}/products?filters[slug][$eq]=${slug}`
	);
	const data = await findProduct.json();

	if (data) {
		await fetch(`${process.env.NEXT_PUBLIC_URL}/products/${data.data[0]?.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
			},
		});
	}
};

export default deleteProduct;
