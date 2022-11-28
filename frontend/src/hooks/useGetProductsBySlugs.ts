/**
 * External dependencies
 */
import { CombinedError, useQuery } from 'urql';

/**
 * Internal dependencies
 */
import { GET_PRODUCTS_BY_ARRAY_OF_SLUGS } from 'graphqlQueries';
import { useStateContext } from 'contexts/CartContext';

const useGetProductsBySlugs = () => {
	const { favorites } = useStateContext();

	const [results] = useQuery({
		query: GET_PRODUCTS_BY_ARRAY_OF_SLUGS,
		variables: { slugs: favorites },
	});

	const { data, fetching, error } = results;

	return { data, fetching, error };
};

export default useGetProductsBySlugs;
