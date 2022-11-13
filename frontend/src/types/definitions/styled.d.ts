/**
 * External dependencies
 */
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: Record<string, number>;
		colors: Record<string, string>;
		fontSizes: Record<string, number>;
		radius: number;
	}
}
