/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/**
 * External dependencies
 */
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Component {...pageProps} />
	</ThemeProvider>
);

export default App;
