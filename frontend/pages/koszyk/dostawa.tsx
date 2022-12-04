/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { CartLayout } from 'layouts';
import { ShippingMethod } from 'fragments';

const Cart = () => (
	<>
		<Head>
			<link
				rel="stylesheet"
				href="https://geowidget.inpost.pl/inpost-geowidget.css"
			/>
			<title>EUPHORIA | Koszyk | Dostawa</title>
			<script src="https://geowidget.inpost.pl/inpost-geowidget.js" defer />
		</Head>
		<CartLayout>
			<ShippingMethod />
		</CartLayout>
	</>
);

export default Cart;
