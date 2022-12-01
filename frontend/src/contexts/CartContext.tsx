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
import { unionBy } from 'lodash';

/**
 * Internal dependencies
 */
import { useUserData } from 'hooks';
import { checkIfProductsStillExist } from 'utils';

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

const initialShipping = {
	name: '',
	address: {
		line1: '',
		line2: '',
	},
};

const CartContext = createContext<any>([]);

export const StateContext: FC<PropsWithChildren> = ({ children }) => {
	const { user, isLoading: isUserLoading } = useUser();
	const [cart, setCart] = useState<Array<CartItemType | never>>([]);
	const [favorites, setFavorites] = useState<Array<string>>([]);
	const [shippingLocation, setShippingLocation] =
		useState<any>(initialShipping);
	const { userData, isLoading: isUserDataLoading } = useUserData(
		cart,
		favorites,
		shippingLocation
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

				const shippingData = JSON.parse(
					localStorage.getItem('EUPHORIA_shipping') || ''
				);

				shippingData && setShippingLocation(shippingData);
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
			localStorage.setItem(
				'EUPHORIA_shipping',
				JSON.stringify(shippingLocation)
			);
	}, [shippingLocation, isUserLoading, user]);

	useEffect(() => {
		!user &&
			!isUserLoading &&
			localStorage.setItem('EUPHORIA_favorites', JSON.stringify(favorites));
	}, [favorites, isUserLoading, user]);

	useEffect(() => {
		!isUserDataLoading &&
			userData &&
			userData.shippingLocation !== '' &&
			setShippingLocation(userData.shippingLocation);

		if (!isUserDataLoading && userData) {
			const cartData = JSON.parse(localStorage.getItem('EUPHORIA_cart') || '');

			const merged: any = unionBy(cartData, userData.cart, 'slug');

			setCart(merged);
			localStorage.setItem('EUPHORIA_cart', JSON.stringify([]));
		}

		if (!isUserDataLoading && userData) {
			const favoritesData = JSON.parse(
				localStorage.getItem('EUPHORIA_favorites') || ''
			);

			const merged: any = unionBy(favoritesData, userData.favorites);

			setFavorites(merged);
			localStorage.setItem('EUPHORIA_favorites', JSON.stringify([]));
		}
	}, [isUserDataLoading, userData]);

	const handleMissingFavorites = async () => {
		const check = await checkIfProductsStillExist(favorites);

		if (check.includes('')) {
			const filteredFavorites = favorites.filter(
				(item) => check.indexOf(item) !== -1
			);

			setFavorites(filteredFavorites);
		}
	};

	useEffect(() => {
		if (favorites.length > 0) handleMissingFavorites();
		// eslint-disable-next-line
	}, [favorites]);

	const contextValue = useMemo(() => {
		return {
			freeShippingTreshold,
			favorites,
			cart,
			shippingLocation,
			updateShippingLocation: (value: any) => setShippingLocation(value),
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
			filterCart: (missingProducts: Array<string>) => {
				const filteredCart = cart.filter(
					(item) => missingProducts.indexOf(item.slug) !== -1
				);

				setCart(filteredCart);
			},
		};
	}, [cart, freeShippingTreshold, favorites, shippingLocation]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
