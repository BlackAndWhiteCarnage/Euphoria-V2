/**
 * External dependencies
 */
import { CartItemType } from 'contexts/CartContext';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET || ''}`, {
	apiVersion: '2022-11-15',
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['p24', 'blik'],
				phone_number_collection: {
					enabled: true,
				},
				shipping_options: [
					{
						shipping_rate_data: req.body.shipping,
					},
				],
				line_items: req.body.cart.map((item: CartItemType) => {
					return {
						price_data: {
							currency: 'pln',
							product_data: {
								name: item.title,
								images: [item.image],
							},
							unit_amount: item.price * 100,
						},
						quantity: 1,
					};
				}),
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/canceled`,
			});
			res.status(200).json(session);
		} catch (err: any) {
			res.status(err.statusCode || 500).json(err.message);
		}
	}
}
