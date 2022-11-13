/**
 * External dependencies
 */
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: Record<string, string>;
		colors: Record<string, string>;
		fontSizes: Record<string, string>;
		radius: string;
	}
}
