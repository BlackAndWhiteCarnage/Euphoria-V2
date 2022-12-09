/**
 * External dependencies
 */
import Stripe from 'stripe';
import { buffer } from 'micro';

/**
 * Internal dependencies
 */
import { deleteProduct } from 'utils';

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function webhookHandler(req, res) {
	const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET, {
		apiVersion: '2022-11-15',
	});

	if (req.method === 'POST') {
		const buf = await buffer(req);
		const sig = req.headers['stripe-signature'];
		const webhookSecret = process.env.NEXT_PUBLIC_STRAPI_WEBHOOK_KEY;

		let event;

		try {
			if (!sig || !webhookSecret) return;

			event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
		} catch (error) {
			return res.status(400).send(`Webhook error: ${error.message}`);
		}

		// const arr = await Promise.all(
		// 	products.map((product) => {
		// 		return findProduct(typeof product === 'string' ? product : product.slug);
		// 	})
		// );

		return res
			.status(400)
			.send(`Webhook error: ${event.data.object.metadata.ProductsToDelete}`);

		// await event.data.object.metadata.ProductsToDelete.split(',').forEach(
		// 	async (element) => {
		// 		async () => {
		// 			const findProduct = await fetch(
		// 				`${process.env.NEXT_PUBLIC_URL}/products?filters[slug][$eq]=${element}`
		// 			);
		// 			const data = await findProduct.json();

		// 			if (!data) return;

		// 			await fetch(
		// 				`${process.env.NEXT_PUBLIC_URL}/products/${data.data[0]?.id}`,
		// 				{
		// 					method: 'DELETE',
		// 					headers: {
		// 						Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
		// 					},
		// 				}
		// 			);
		// 		};
		// 	}
		// );
	}

	res.status(200).send();
}
