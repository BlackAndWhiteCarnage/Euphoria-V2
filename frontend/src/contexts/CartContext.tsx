import {
	createContext,
	useContext,
	useState,
	useMemo,
	PropsWithChildren,
	FC,
} from 'react';

const CartContext = createContext<any>([]);

type AddProps = {
	image: string;
	title: string;
	price: string;
	extras?: Array<string>;
	count?: number;
	slug: string;
};

export const StateContext: FC<PropsWithChildren> = ({ children }) => {
	const [cart, setCart] = useState<Array<any>>([]);

	const contextValue = useMemo(() => {
		return {
			cart,
			setCart,
			add: ({ image, title, price, extras, count, slug }: AddProps) => {
				setCart([
					...cart,
					{
						image,
						title,
						price,
						extras,
						count,
						slug,
					},
				]);
			},
			remove: (slug: string) =>
				setCart([...cart.filter((el) => slug !== el.slug)]),
			updateExtras: (slug: string, newExtras: Array<never> | Array<string>) => {
				setCart(
					[...cart],
					(cart.find((el: any) => slug === el.slug).extras = newExtras)
				);
			},
		};
	}, [cart]);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export const useStateContext = () => useContext(CartContext);
