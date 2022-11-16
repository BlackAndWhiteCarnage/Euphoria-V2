/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import classes from './Box.module.scss';

const Box: FC<PropsWithChildren> = ({ children }) => (
	<div className={classes.box}>{children}</div>
);

export default Box;
