/**
 * Internal dependencies
 */
import { CartLayout } from 'layouts';
import Head from 'next/head';

const Cart = () => (
	<>
		<Head>
			<link
				rel="stylesheet"
				href="https://geowidget.inpost.pl/inpost-geowidget.css"
			/>
			<script src="https://geowidget.inpost.pl/inpost-geowidget.js" defer />
		</Head>
		<CartLayout />
	</>
);

export default Cart;
