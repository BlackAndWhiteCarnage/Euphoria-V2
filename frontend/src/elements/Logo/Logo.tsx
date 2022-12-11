/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ReactComponent as LogoImage } from 'images/logo.svg';
import Link from 'next/link';
import classes from './Logo.module.scss';

const Logo: FC = () => (
	<Link href="/" title="Przejdź na stronę główną">
		<LogoImage className={classes.logo} />
	</Link>
);

export default Logo;
