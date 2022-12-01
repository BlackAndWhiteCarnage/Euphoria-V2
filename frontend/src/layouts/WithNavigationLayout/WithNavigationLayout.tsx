/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { IconsProvider } from 'fragments';
import { Logo } from 'elements';
import { routes } from 'config/routes';
import Link from 'next/link';
import classes from './WithNavigationLayout.module.scss';

const WithNavigationLayout: FC<PropsWithChildren> = ({ children }) => {
	const route = useRouter();

	return (
		<>
			<div className={classes.topBar}>
				<Logo />
				<IconsProvider />
			</div>
			<nav className={classes.navigation}>
				{routes.map(({ label, path }, i) => (
					<Link href={path} key={i} legacyBehavior>
						<a
							href={path}
							className={classnames(classes.navLink, {
								[classes['is-active']]: route.asPath === path,
							})}
						>
							{label}
						</a>
					</Link>
				))}
			</nav>
			{children}
		</>
	);
};

export default WithNavigationLayout;
