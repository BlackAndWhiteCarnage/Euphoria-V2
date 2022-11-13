/**
 * Internal dependencies
 */
import { colors } from 'styles/variables';
import { theme } from 'styles/theme';

export const color = (key: keyof typeof colors) => theme.colors[key];
