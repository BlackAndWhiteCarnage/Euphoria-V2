/**
 * External dependencies
 */
import { useQuery } from 'urql';

/**
 * Internal dependencies
 */
import { Loader } from 'elements';
import { Grid, Card } from 'fragments';
import { GET_ALL_CATEGORY_PRODUCTS } from 'graphql/getAllCategoryProducts';

const Panties = () => {
	const [results] = useQuery({
		query: GET_ALL_CATEGORY_PRODUCTS,
		variables: { name: 'majtki' },
	});

	const { data, fetching, error } = results;

	if (fetching) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const items = data.categories.data[0].attributes.products.data;

	return (
		<Grid>
			{items.map(({ attributes }: any) => (
				<Card
					name={attributes.title}
					price={attributes.price}
					href={`/majtki/${attributes.slug}`}
					image={attributes.images.data[0].attributes.formats.medium.url}
				/>
			))}
		</Grid>
	);
};

export default Panties;
