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

		try {
			if (!sig || !webhookSecret) return;

			const event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

			event.data.object.metadata.ProductsToDelete.split(',').forEach(
				(element) => {
					try {
						deleteProduct(element);
					} catch {}
				}
			);
		} catch (error) {
			return res.status(400).send(`Webhook error: ${error.message}`);
		}
	}

	res.status(200).send();
}
