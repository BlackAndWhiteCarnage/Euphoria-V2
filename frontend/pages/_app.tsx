/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider, createClient } from 'urql';
import { WithNavigationLayout } from 'layouts';

/**
 * Internal dependencies
 */
import 'styles/index.scss';

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL });

const App: FC<AppProps> = ({ Component, pageProps }) => (
	<WithNavigationLayout>
		<Provider value={client}>
			<Component {...pageProps} />
		</Provider>
	</WithNavigationLayout>
);

export default App;
