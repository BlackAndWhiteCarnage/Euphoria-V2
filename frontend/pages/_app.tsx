/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider, createClient } from 'urql';
import { UserProvider } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import 'styles/index.scss';
import { MainLayout, WithNavigationLayout, WithFooterLayout } from 'layouts';
import { StateContext } from 'contexts/CartContext';
import firebase from 'utils/initFirebase';

firebase();

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL as string });

const App: FC<AppProps> = ({ Component, pageProps }) => (
	<UserProvider>
		<StateContext>
			<MainLayout>
				<WithNavigationLayout>
					<WithFooterLayout>
						<Provider value={client}>
							<Component {...pageProps} />
						</Provider>
					</WithFooterLayout>
				</WithNavigationLayout>
			</MainLayout>
		</StateContext>
	</UserProvider>
);

export default App;
