/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider, createClient } from 'urql';
import { ThemeProvider } from 'styled-components';

/**
 * External dependencies
 */
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyles';

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL });

const App: FC = ({ Component, pageProps }: AppProps) => (
	<Provider value={client}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	</Provider>
);

export default App;
