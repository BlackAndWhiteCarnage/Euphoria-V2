/**
 * Internal dependencies
 */
import { useRouter } from 'next/router';
import { Button, Header, Loader, Separator } from 'elements';
import { FC, PropsWithChildren } from 'react';
import { userAccountRoutes } from 'config/routes';
import classes from './UserProfileLayout.module.scss';

const UserProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const route = useRouter();

	return (
		<div className={classes.wrapper}>
			<Header
				text={`Twoje Konto - ${
					userAccountRoutes.filter(({ path }) => path === route.pathname)[0]
						.label
				}`}
			/>
			<nav className={classes.userNavigation}>
				{userAccountRoutes.map(({ path, label }) => (
					<Button size="large" href={path} disabled={route.pathname === path}>
						{label}
					</Button>
				))}
				<Button
					type="alert"
					size="large"
					className={classes.logout}
					onClick={() => {
						route.push('/api/auth/logout');
						localStorage.setItem('EUPHORIA_cart', JSON.stringify([]));
						localStorage.setItem('EUPHORIA_favorites', JSON.stringify([]));
					}}
				>
					Wyloguj
				</Button>
			</nav>
			<Separator />
			{children}
		</div>
	);
};

export default UserProfileLayout;