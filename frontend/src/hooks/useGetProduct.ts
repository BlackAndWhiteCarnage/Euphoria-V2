/**
 * External dependencies
 */
import { useQuery, CombinedError } from 'urql';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { GET_PRODUCT } from 'graphqlQueries';

const useGetProduct = (): {
	product: any;
	ready: boolean;
	error: CombinedError | undefined;
} => {
	const [product, setProduct] = useState();

	const router = useRouter();

	const { slug } = router.query;

	const [results] = useQuery({
		query: GET_PRODUCT,
		variables: { slug: slug || '' },
	});

	const { data, fetching, error } = results;

	useEffect(() => {
		!fetching &&
			data.products.data[0] &&
			setProduct(data.products.data[0].attributes);
	}, [data, fetching]);

	const ready = product !== undefined;

	return { ready, error, product };
};

export default useGetProduct;
