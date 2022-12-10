/**
 * External dependencies
 */
import { Button, Separator } from 'elements';
import { FC, PropsWithChildren } from 'react';
import { ReactComponent as Przelewy24 } from 'images/icons/przelewy-24.svg';
import { ReactComponent as Blik } from 'images/icons/blik.svg';

/**
 * Internal dependencies
 */
import classes from './WithFooterLayout.module.scss';

const WithFooterLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		{children}
		<Separator />
		<footer className={classes.footer}>
			<div className={classes.content}>
				<div className={classes.paymentMethods}>
					<b>Metody płatności:</b>
					<Przelewy24 className={classes.icon} />
					<Blik className={classes.icon} />
				</div>
			</div>
			<div className={classes.buttons}>
				<Button href="/polityka-prywatnosci">Polityka prywatności</Button>
				<Button href="/regulamin">Regulamin</Button>
			</div>
		</footer>
	</>
);

export default WithFooterLayout;
