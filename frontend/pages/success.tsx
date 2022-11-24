import { Price } from 'elements';
import { useRouter } from 'next/router';

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
	const route = useRouter();

	return (
		<div>
			<div>
				<h1>Dziękuję za zamówienie!</h1>
				<h2>Email potwierdzający został wysłany na adres</h2>
				<h2>{order.customer_details.email}</h2>
				<div>
					<h3>Zamówienia</h3>
					<h2>
						{order.line_items.data.map((item: any) => (
							<div key={item.id}>
								<p>{item.description}</p>
								<Price price={item.price.unit_amount / 100} />
							</div>
						))}
					</h2>
					<h2>Wybrany paczkomat</h2>
					<h2>{order.metadata.paczkomat}</h2>
				</div>
			</div>
		</div>
	);
};

export default Success;
