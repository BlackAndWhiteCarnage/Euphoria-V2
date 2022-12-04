/**
 * External dependencies
 */
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { CartLayout } from 'layouts';
import { Loader } from 'elements';
import { LogInInfo, Summary } from 'fragments';

const Cart = () => {
	const { user, isLoading } = useUser();

	return (
		<>
			<Head>
				<title>EUPHORIA | Koszyk</title>
			</Head>
			<CartLayout
				step={user && 'Podsumowanie'}
				logIn={isLoading ? <Loader /> : user ? <Summary /> : <LogInInfo />}
			/>
		</>
	);
};

export default Cart;
