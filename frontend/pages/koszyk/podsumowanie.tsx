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
		</Head>
		<CartLayout step="Podsumowanie">
			<Summary />
		</CartLayout>
	</>
);

export default Cart;
