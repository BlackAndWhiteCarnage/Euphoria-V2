/**
 * External dependencies
 */
import { useQuery } from 'urql';

/**
 * Internal dependencies
 */
import { GET_ALL_CATEGORY_PRODUCTS } from 'graphql/getAllCategoryProducts';

const useGetAllCategoryProducts = (category: string) => {
	const [results] = useQuery({
		query: GET_ALL_CATEGORY_PRODUCTS,
		variables: { name: category },
	});

	const { data, fetching, error } = results;

	return { data, fetching, error };
};

export default useGetAllCategoryProducts;
