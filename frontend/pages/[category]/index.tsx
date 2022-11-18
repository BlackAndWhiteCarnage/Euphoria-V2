/**
 * Internal dependencies
 */
import { getImageUrl } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { useGetAllCategoryProducts } from 'hooks';

const Category = () => {
	const { products, ready, error, category } = useGetAllCategoryProducts();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Grid>
			{products.map(({ attributes: { slug, title, price, images } }) => (
				<Card
					key={slug}
					name={title}
					price={price}
					href={`/${category}/${slug}`}
					image={getImageUrl(images)}
				/>
			))}
		</Grid>
	);
};

export default Category;
