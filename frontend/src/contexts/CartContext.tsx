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
	const initial = useMemo(() => [], []);

	const [cart, setCart] = useState<Array<CartItemType | never>>(initial);
	const [freeShippingTreshold, setFreeShippingTreshold] = useState(100);

	useEffect(() => {
		const cartData = JSON.parse(localStorage.getItem('cart') || '');
		cartData && setCart(cartData);
	}, []);

	useEffect(() => {
		cart !== initial && localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart, initial]);

	const contextValue = useMemo(() => {
		return {
			freeShippingTreshold,
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
		};
	}, [cart, freeShippingTreshold]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
