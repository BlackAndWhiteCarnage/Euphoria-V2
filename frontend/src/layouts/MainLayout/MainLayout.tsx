/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import classes from './MainLayout.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
	<div className={classes.layout}>{children}</div>
);

export default MainLayout;
