import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useMemo,
	useState,
} from 'react';

export type CartItemType = {
	count?: number | undefined;
	extras?: Array<string | never>;
	image: string;
	price: number;
	slug: string;
	title: string;
	options?: Array<string>;
};

const CartContext = createContext<any>([]);

export const StateContext: FC<PropsWithChildren> = ({ children }) => {
	const [cart, setCart] = useState<Array<CartItemType>>([]);

	const contextValue = useMemo(() => {
		return {
			cart,
			add: ({
				count,
				extras,
				image,
				price,
				slug,
				title,
				options,
			}: CartItemType) => {
				setCart([
					...cart,
					{
						count,
						extras,
						image,
						price,
						slug,
						title,
						options,
					},
				]);
			},
			remove: (slug: string) =>
				setCart([...cart.filter((el) => slug !== el.slug)]),
			updateExtras: (slug: string, newExtras: Array<never> | Array<string>) => {
				const cartCopy = cart;
				const searchedElement = cartCopy.find((el) => slug === el.slug);

				if (searchedElement) {
					searchedElement.extras = newExtras;

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
