/**
 * External dependencies
 */
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useUser } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { useUserData } from 'hooks';

export type CartItemType = {
	count?: number;
	extras?: Array<string | never>;
	image: string;
	price: number;
	slug: string;
	title: string;
	options?: Array<string | never>;
	basePrice: number;
};

const CartContext = createContext<any>([]);

export const StateContext: FC<PropsWithChildren> = ({ children }) => {
	const { user, isLoading: isUserLoading } = useUser();
	const [cart, setCart] = useState<Array<CartItemType | never>>([]);
	const [favorites, setFavorites] = useState<Array<string>>([]);
	const { userData, isLoading: isUserDataLoading } = useUserData(
		cart,
		favorites
	);

	const [freeShippingTreshold, setFreeShippingTreshold] = useState(100);

	useEffect(() => {
		if (!user && !isUserLoading) {
			try {
				const cartData = JSON.parse(
					localStorage.getItem('EUPHORIA_cart') || ''
				);
				cartData && setCart(cartData);

				const favoritesData = JSON.parse(
					localStorage.getItem('EUPHORIA_favorites') || ''
				);
				favoritesData && setFavorites(favoritesData);
			} catch {}
		}
	}, [isUserLoading, user]);

	useEffect(() => {
		!user &&
			!isUserLoading &&
			localStorage.setItem('EUPHORIA_cart', JSON.stringify(cart));
	}, [cart, isUserLoading, user]);

	useEffect(() => {
		!user &&
			!isUserLoading &&
			localStorage.setItem('EUPHORIA_favorites', JSON.stringify(favorites));
	}, [favorites, isUserLoading, user]);

	useEffect(() => {
		!isUserDataLoading && userData && setCart(userData.cart);
		!isUserDataLoading && userData && setFavorites(userData.favorites);
	}, [isUserDataLoading, userData]);

	const contextValue = useMemo(() => {
		return {
			freeShippingTreshold,
			favorites,
			cart,
			clearCart: () => setCart([]),
			add: (props: CartItemType) => setCart([...cart, { ...props }]),
			remove: (slug: string) =>
				setCart([...cart.filter((el) => slug !== el.slug)]),
			updateExtras: (slug: string, newExtras: Array<never> | Array<string>) => {
				const cartCopy = cart;
				const searchedElement = cartCopy.find((el) => slug === el.slug);

				if (searchedElement) {
					searchedElement.extras = newExtras;

					if (searchedElement.count && searchedElement.extras) {
						searchedElement.price =
							searchedElement.count < searchedElement.extras.length
								? searchedElement.basePrice +
								  (searchedElement.extras.length - searchedElement.count) * 10
								: searchedElement.basePrice;
					}

					setCart([...cartCopy]);
				}
			},
			addToFavorites: (slug: string) => setFavorites([...favorites, slug]),
			removeFromFavorites: (slug: string) =>
				setFavorites([...favorites.filter((el) => slug !== el)]),
			filter: (missingProducts: Array<string>) => {
				const filteredCart = cart.filter(
					(item) => missingProducts.indexOf(item.slug) !== -1
				);

				setCart(filteredCart);
			},
		};
	}, [cart, freeShippingTreshold, favorites]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
