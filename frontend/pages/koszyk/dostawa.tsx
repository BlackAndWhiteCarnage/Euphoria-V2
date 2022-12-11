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
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
			<script src="https://geowidget.inpost.pl/inpost-geowidget.js" defer />
		</Head>
		<CartLayout step="Dostawa">
			<ShippingMethod />
		</CartLayout>
	</>
);

export default Cart;
