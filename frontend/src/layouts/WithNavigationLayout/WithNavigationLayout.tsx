/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import { IconsProvider } from 'fragments';
import { Logo } from 'elements';
import { routes } from 'config/routes';
import Link from 'next/link';
import classes from './WithNavigationLayout.module.scss';

const WithNavigationLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<div className={classes.topBar}>
			<Logo />
			<IconsProvider />
		</div>
		{/* TODO */}
		<nav className={classes.navigation}>
			{routes.map(({ label, path }, i) => (
				<Link href={path} key={i}>
					{label}
				</Link>
			))}
		</nav>
		{children}
	</>
);

export default WithNavigationLayout;
