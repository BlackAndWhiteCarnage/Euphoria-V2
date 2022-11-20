import { useStateContext } from 'contexts/CartContext';

const Cart = () => {
	const { cart } = useStateContext();

	return (
		<div>
			{cart.map(({ title, slug, extras, count, price }: any) => (
				<div key={slug}>
					<p>Tytuł: {title}</p>
					<ul>
						Dodtaki:{' '}
						{extras.map((el: any) => (
							<li key={el}>{el}</li>
						))}
					</ul>
					<p>Dostępne dodatki: {count}</p>
					<p>Cena: {price}</p>
				</div>
			))}
		</div>
	);
};

export default Cart;
