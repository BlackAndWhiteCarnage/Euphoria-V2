/**
 * External dependencies
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*,*::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-weight: 400;
		font-family: 'Poppins', sans-serif;
		color: ${({ theme }) => theme.colors.white};
	}

	body {
		background: ${({ theme }) => theme.colors.black};
	}
`;

export default GlobalStyle;
