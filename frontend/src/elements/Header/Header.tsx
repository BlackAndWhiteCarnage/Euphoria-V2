/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import classes from './Header.module.scss';

export type HeaderProps = {
	text: string;
	level?: 1 | 2;
};

const Header: FC<HeaderProps> = ({ text, level = 1 }) => {
	const H = level === 1 ? 'h1' : 'h2';

	return <H className={classes.header}>{text}</H>;
};

export default Header;
