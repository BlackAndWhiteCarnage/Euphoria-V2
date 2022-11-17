/**
 * Internal dependencies
 */
import { getNestedCategoryData } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { useGetAllCategoryProducts } from 'hooks';

const Photoshoots = () => {
	const { data, fetching, error } = useGetAllCategoryProducts('sesje');

	if (fetching) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Grid>
			{getNestedCategoryData(data).map(({ attributes }: any) => (
				<Card
					key={attributes.slug}
					name={attributes.title}
					price={attributes.price}
					href={`/sesje-zdjeciowe/${attributes.slug}`}
					image={attributes.images.data[0].attributes.formats.medium.url}
				/>
			))}
		</Grid>
	);
};

export default Photoshoots;
