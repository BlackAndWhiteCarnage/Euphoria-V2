/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';

/**
 * Internal dependencies
 */
import classes from './Grid.module.scss';

type GridProps = {
	children: ReactElement | Array<ReactElement>;
};

const Grid: FC<GridProps> = ({ children }) => (
	<div className={classes.grid}>{children}</div>
);

export default Grid;
