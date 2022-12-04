/**
 * External dependencies
 */
import { useEffect } from 'react';

/**
 * Internal dependencies
 */
import { useStateContext } from 'contexts/CartContext';
import { AfterPaymentLayout } from 'layouts';

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`);

export async function getServerSideProps(params: any) {
	const order = await stripe.checkout.sessions.retrieve(
		params.query.session_id,
		{
			expand: ['line_items'],
		}
	);

	return { props: { order } };
}

const Success = ({ order }: any) => {
	const { clearCart, cart } = useStateContext();

	useEffect(() => {
		cart.length > 0 && clearCart();
	}, [cart, clearCart]);

	return <AfterPaymentLayout order={order} />;
};

export default Success;
