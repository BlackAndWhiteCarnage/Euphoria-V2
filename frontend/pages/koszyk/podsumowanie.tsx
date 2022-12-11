/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { Summary } from 'fragments';
import { CartLayout } from 'layouts';

const Cart = () => (
	<>
		<Head>
			<title>EUPHORIA | Koszyk | Podsumowanie</title>
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
		</Head>
		<CartLayout step="Podsumowanie">
			<Summary />
		</CartLayout>
	</>
);

export default Cart;
