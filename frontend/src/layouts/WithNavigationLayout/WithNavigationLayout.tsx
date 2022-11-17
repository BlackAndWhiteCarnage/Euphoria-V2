/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import { Logo } from 'elements';
import { routes } from 'config/routes';
import Link from 'next/link';
import classes from './WithNavigationLayout.module.scss';

type WithNavigationLayoutProps = PropsWithChildren<{
	cart: any;
	favorites: any;
	user: any;
}>;

const WithNavigationLayout: FC<WithNavigationLayoutProps> = ({
	cart,
	children,
	favorites,
	user,
}) => (
	<>
		<div className={classes.topBar}>
			<Logo />
			{/* TODO */}
			<div className={classes.functionalIcons}>
				<div>{favorites}</div>
				<div>{user}</div>
				<div>{cart}</div>
			</div>
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
