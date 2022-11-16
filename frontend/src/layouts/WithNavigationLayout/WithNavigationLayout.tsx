/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */

import { ReactComponent as Heart } from 'images/icons/heart.svg';
import { ReactComponent as Person } from 'images/icons/person.svg';
import { ReactComponent as Shopper } from 'images/icons/shopper.svg';
import { routes } from 'config/routes';
import { Logo } from 'elements';
import { NavIcons } from 'fragments';
import Link from 'next/link';
import classes from './WithNavigationLayout.module.scss';

const WithNavigationLayout: FC<PropsWithChildren> = ({ children }) => (
	<div className={classes.layoutWrapper}>
		<div className={classes.topBar}>
			<Logo />
			<NavIcons
				items={[
					{
						href: '/',
						icon: <Heart />,
					},
					{
						href: '/',
						icon: <Person />,
					},
					{
						count: 12,
						href: '/',
						icon: <Shopper />,
					},
				]}
			/>
		</div>
		{/* TODO */}
		<nav className={classes.navigation}>
			{routes.map(({ label, path }) => (
				<Link href={path}>{label}</Link>
			))}
		</nav>
		{children}
	</div>
);

export default WithNavigationLayout;
