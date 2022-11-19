/**
 * External dependencies
 */
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { useStateContext } from 'contexts/CartContext';

const useIsInCart = () => {
	const { cart } = useStateContext();

	const router = useRouter();
	const { slug: querySlug } = router.query;

	return cart.find((el: any) => querySlug === el.slug);
};

export default useIsInCart;
