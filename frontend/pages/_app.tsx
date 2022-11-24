/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider, createClient } from 'urql';
import { MainLayout, WithNavigationLayout, WithFooterLayout } from 'layouts';

/**
 * Internal dependencies
 */
import { StateContext } from 'contexts/CartContext';
import 'styles/index.scss';

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL as string });

const App: FC<AppProps> = ({ Component, pageProps }) => (
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
);

export default App;
