/**
 * Internal dependencies
 */
import { getNestedCategoryData } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { useGetAllCategoryProducts } from 'hooks';

const Others = () => {
	const { data, fetching, error } = useGetAllCategoryProducts('inne');

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
						href={`/inne/${slug}`}
						image={images.data[0].attributes.formats.medium.url}
					/>
				)
			)}
		</Grid>
	);
};

export default Others;
