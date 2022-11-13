/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ReactComponent as LogoImage } from 'images/logo.svg';
import { color, breakpoint } from 'styles/utils'

export const StyledLogo = styled(LogoImage)`
	width: 180px;
	height: 48px;

	path {
		fill: ${color('white')};
	}

	${breakpoint('md')} {
		width: 120px;
		height: 32px;
	}
`