/**
 * Internal dependencies
 */
 import { fontSizes } from "styles/variables";
 import { theme } from "styles/theme";
 
 export const fontSize = (key: keyof typeof fontSizes) => `${theme.fontSizes[key]}px`;