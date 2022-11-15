import 'react'; // eslint-disable-line react/no-typos

interface CustomCSSProperties {
	'--margin-bottom': string;
	'--margin-mobile-bottom': string;
	'--margin-mobile-top': string;
	'--margin-top': string;
}

declare module 'react' {
	export interface CSSProperties extends Partial<CustomCSSProperties> {}
}
