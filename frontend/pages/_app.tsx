/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import GlobalStyle from '../src/styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
);

export default App;
