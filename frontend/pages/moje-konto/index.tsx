/**
 * External dependencies
 */
import { useRouter } from 'next/router';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET || ''}`, {
	apiVersion: '2022-11-15',
});

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(ctx) {
		const session = getSession(ctx.req, ctx.res);

		const stripeId =
			session?.user[`${process.env.AUTH0_BASE_URL}/stripe_customer_id`];

		const paymentIntents = await stripe.paymentIntents.list({
			customer: stripeId,
		});

		return { props: { orders: paymentIntents.data } };
	},
});

const UserProfile = ({ user, orders }: any) => {
	const route = useRouter();

	return (
		user && (
			<div>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<div>
					{orders.map((order: any) => (
						<div key={order.id}>
							<h1>Order Number: {order.id}</h1>
							<h2>Ammount: {order.amount}</h2>
							<h2>Receipt Email: {user.email}</h2>
						</div>
					))}
					<button onClick={() => route.push('/api/auth/logout')}>Logout</button>
				</div>
			</div>
		)
	);
};

export default UserProfile;
