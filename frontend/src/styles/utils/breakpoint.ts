/**
 * Internal dependencies
 */
import { breakpoints } from "styles/variables";
import { theme } from "styles/theme";

export const breakpoint = (key: keyof typeof breakpoints) => `@media screen and (max-width: ${theme.breakpoints[key]}px)`;