/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import classes from './WithFooterLayout.module.scss';

const WithFooterLayout: FC<PropsWithChildren> = ({ children }) => (
	<div className={classes.layout}>
		{children}
		<footer>footer</footer>
	</div>
);

export default WithFooterLayout;
