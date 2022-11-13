/**
 * External dependencies
 */
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

/**
 * Internal dependencies
 */
import viewports from './viewports';
import { theme } from 'styles/theme'

addDecorator(withThemesProvider([theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
		viewports: {
			...viewports,
		},
	},
}