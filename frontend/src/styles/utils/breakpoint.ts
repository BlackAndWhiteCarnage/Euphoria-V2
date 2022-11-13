/**
 * Internal dependencies
 */
import { breakpoints } from "styles/variables";
import { theme } from "styles/theme";

export const breakpoint = (key: keyof typeof breakpoints) => theme.breakpoints[key];