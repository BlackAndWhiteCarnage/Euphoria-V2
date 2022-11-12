/**
 * External dependencies
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

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
