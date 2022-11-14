/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ReactComponent as LogoImage } from 'images/logo.svg';
import classes from './Logo.module.scss';

const Logo: FC = () => <LogoImage className={classes.logo} />;

export default Logo;
