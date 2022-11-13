/**
 * External dependencies
 */
import { createGlobalStyle } from 'styled-components';
import { color } from './utils';

const GlobalStyle = createGlobalStyle`
	*,*::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-weight: 400;
		font-family: 'Poppins', sans-serif;
		color: ${color('white')};
	}

	body {
		background: ${color('black')};
	}
`;

export default GlobalStyle;
