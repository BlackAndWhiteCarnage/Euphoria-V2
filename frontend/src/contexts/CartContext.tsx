/**
 * External dependencies
 */
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
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
	const [cart, setCart] = useState<Array<CartItemType>>([]);

	const contextValue = useMemo(() => {
		return {
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
	}, [cart]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
