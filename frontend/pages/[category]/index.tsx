/**
 * Internal dependencies
 */
import { useRouter } from 'next/router';
import { getNestedCategoryData } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { useGetAllCategoryProducts } from 'hooks';

const Category = () => {
	const router = useRouter();

	const { category } = router.query;
	const { data, fetching, error } = useGetAllCategoryProducts(
		category as string
	);

	if (fetching) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Grid>
			{getNestedCategoryData(data).map(
				({ attributes: { slug, title, price, images } }: any) => (
					<Card
						key={slug}
						name={title}
						price={price}
						href={`/${category}/${slug}`}
						image={images.data[0].attributes.formats.medium.url}
					/>
				)
			)}
		</Grid>
	);
};

export default Category;
