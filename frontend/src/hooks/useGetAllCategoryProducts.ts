/**
 * External dependencies
 */
import { useState, useEffect } from 'react';
import { CombinedError, useQuery } from 'urql';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { GET_ALL_CATEGORY_PRODUCTS } from 'graphqlQueries';

const useGetAllCategoryProducts = (
	specyficCategory?: string
): {
	products: Array<any>;
	ready: boolean;
	error: CombinedError | undefined;
	category: any;
} => {
	const [products, setProducts] = useState([]);

	const router = useRouter();

	const { category } = router.query;

	const [results] = useQuery({
		query: GET_ALL_CATEGORY_PRODUCTS,
		variables: { name: specyficCategory || category || '' },
	});

	const { data, fetching, error } = results;

	useEffect(() => {
		!fetching &&
			data?.categories?.data?.length > 0 &&
			setProducts(data.categories.data[0].attributes.products.data);
	}, [data, fetching]);

	const ready = products?.length > 0;

	return { products, ready, error, category };
};

export default useGetAllCategoryProducts;
