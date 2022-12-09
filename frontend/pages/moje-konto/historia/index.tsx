/**
 * External dependencies
 */
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Stripe from 'stripe';

/**
 * Internal dependencies
 */
import { OrdersHistoryLayout, UserProfileLayout } from 'layouts';
import Head from 'next/head';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`, {
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

		const sessions = await stripe.checkout.sessions.list({
			customer: stripeId,
			limit: 50,
		});

		const sessionsIds: Array<string> = [];

		sessions.data.forEach(({ id }) => sessionsIds.push(id));

		// const lineItems = await Promise.all(
		// 	sessionsIds.map((id) =>
		// 		stripe.checkout.sessions.listLineItems(id, { limit: 50 })
		// 	)
		// );

		return {
			props: { orders: { paymentIntents, sessionsIds } },
		};
	},
});

const OrdersHistory = (orders: any) => (
	<>
		<Head>
			<title>EUPHORIA | Historia Zamówień</title>
		</Head>
		<OrdersHistoryLayout data={orders} />
	</>
);

OrdersHistory.PageLayout = withPageAuthRequired(UserProfileLayout);

export default OrdersHistory;
