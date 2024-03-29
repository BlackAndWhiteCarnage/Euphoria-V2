/**
 * Internal dependencies
 */
import viewports from './viewports';
import 'styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  viewport: {
		viewports: {
			...viewports,
		},
	},
}