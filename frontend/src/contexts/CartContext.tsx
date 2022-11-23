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
	const cartInitial = useMemo(() => [], []);
	const favoritesInitial = useMemo(() => [], []);

	const [cart, setCart] = useState<Array<CartItemType | never>>(cartInitial);
	const [favorites, setFavorites] = useState<Array<string>>(favoritesInitial);
	const [freeShippingTreshold, setFreeShippingTreshold] = useState(100);

	useEffect(() => {
		// TODO
		try {
			const cartData = JSON.parse(localStorage.getItem('EUPHORIA_cart') || '');
			cartData && setCart(cartData);

			const favoritesData = JSON.parse(
				localStorage.getItem('EUPHORIA_favorites') || ''
			);
			favoritesData && setFavorites(favoritesData);
		} catch {}
	}, []);

	useEffect(() => {
		cart !== cartInitial &&
			localStorage.setItem('EUPHORIA_cart', JSON.stringify(cart));
	}, [cart, cartInitial]);

	useEffect(() => {
		favorites !== favoritesInitial &&
			localStorage.setItem('EUPHORIA_favorites', JSON.stringify(favorites));
	}, [favorites, favoritesInitial]);

	const contextValue = useMemo(() => {
		return {
			freeShippingTreshold,
			favorites,
			cart,
			add: (props: CartItemType) => {
				setCart([...cart, { ...props }]);
			},
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
		};
	}, [cart, freeShippingTreshold, favorites]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
