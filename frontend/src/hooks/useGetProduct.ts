/**
 * External dependencies
 */
import { useQuery } from 'urql';

/**
 * Internal dependencies
 */
import { GET_PRODUCT } from 'graphqlQueries';

const useGetAllCategoryProducts = (slug: string) => {
	const [results] = useQuery({
		query: GET_PRODUCT,
		variables: { slug },
	});

	const { data, fetching, error } = results;

	return { data, fetching, error };
};

export default useGetAllCategoryProducts;
