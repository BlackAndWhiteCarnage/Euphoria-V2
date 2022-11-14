/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider, createClient } from 'urql';

/**
 * Internal dependencies
 */
import 'styles/index.scss';

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL });

const App: FC = ({ Component, pageProps }: AppProps) => (
	<Provider value={client}>
		<Component {...pageProps} />
	</Provider>
);

export default App;
