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
import { MainLayout, WithNavigationLayout, WithFooterLayout } from 'layouts';
import { StateContext } from 'contexts/CartContext';
import 'styles/index.scss';

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL as string });

const App: FC<AppProps> = ({ Component, pageProps }) => (
	<UserProvider>
		<MainLayout>
			<StateContext>
				<WithNavigationLayout>
					<WithFooterLayout>
						<Provider value={client}>
							<Component {...pageProps} />
						</Provider>
					</WithFooterLayout>
				</WithNavigationLayout>
			</StateContext>
		</MainLayout>
	</UserProvider>
);

export default App;
