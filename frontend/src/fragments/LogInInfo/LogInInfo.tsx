/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Button, FilterCart, Separator } from 'elements';
import classes from './LogInInfo.module.scss';

const LogInInfo: FC = () => (
	<>
		<div className={classes.logInInfo}>
			<Button size="large" href="/api/auth/login">
				Zaloguj się
			</Button>
			<Separator>lub</Separator>
			<Button size="large" href="/koszyk/podsumowanie">
				Kontynuuj jako gość
			</Button>
		</div>
		<FilterCart />
	</>
);

export default LogInInfo;
