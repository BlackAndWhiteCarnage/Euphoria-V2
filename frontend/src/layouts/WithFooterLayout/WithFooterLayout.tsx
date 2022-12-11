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
		<footer>
			<p className={classes.description}>
				EUPHORIA jest stroną internetową oferującą zakup noszonej używanej
				bielizny. Wszystkie oferty używanej bielizny są tworzone przeze mnie a
				zdjęcia znajdujące się na niej są moją własnością, każdego rodzaju
				rozpowszechnianie zdjęć lub powielanie opisów bez mojej zgodny będzie
				konsekwentnie ścigane. Na stronie znajdziesz:
			</p>
			<ul className={classes.itemsList}>
				<li>Noszone majtki</li>
				<li>Noszone skarpetki</li>
				<li>Noszone rajstopy</li>
				<li>Noszone pończochy</li>
				<li>Noszone piżamy</li>
				<li>Noszone kapcie</li>
				<li>Sesje zdjęciowe</li>
			</ul>
			<div className={classes.footer}>
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
			</div>
		</footer>
	</>
);

export default WithFooterLayout;
