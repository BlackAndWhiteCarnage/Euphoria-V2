/**
 * External dependencies
 */
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { useStateContext, CartItemType } from 'contexts/CartContext';

const useIsInCart = (specyficSlug?: string) => {
	const { cart } = useStateContext();

	const router = useRouter();
	const { slug: querySlug } = router.query;

	if (!Array.isArray(cart)) return;

	return cart.find((el: CartItemType) =>
		!specyficSlug ? querySlug === el.slug : specyficSlug === el.slug
	);
};

export default useIsInCart;
