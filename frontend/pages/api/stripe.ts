/**
 * External dependencies
 */
import { CartItemType } from 'contexts/CartContext';
import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET || ''}`, {
	apiVersion: '2022-11-15',
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const authSession = getSession(req, res);
	const user = authSession?.user;
	const stripeId = user && user['http://localhost:3000/stripe_customer_id'];

	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['p24', 'blik'],
				customer: stripeId,
				allow_promotion_codes: true,
				phone_number_collection: {
					enabled: req.body.phoneRequirement,
				},
				payment_intent_data: {
					metadata: {
						Paczkomat: req.body.location.name,
						Ulica: req.body.location.address.line1,
						Adres: req.body.location.address.line2,
						ProductsToDelete: req.body.productsToDelete,
					},
				},
				metadata: {
					Paczkomat: req.body.location.name,
					Ulica: req.body.location.address.line1,
					Adres: req.body.location.address.line2,
					ProductsToDelete: req.body.productsToDelete,
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
								description: !item.extras
									? ' '
									: `Wybrane dodatki: ${item.extras?.join(', ')}`,
							},
							unit_amount: item.price * 100,
						},
						quantity: 1,
					};
				}),
				success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/canceled`,
			});
			res.status(200).json(session);
		} catch (err: any) {
			res.status(err.statusCode || 500).json(err.message);
		}
	}
}
