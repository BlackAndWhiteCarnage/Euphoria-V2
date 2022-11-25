/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Button, Separator } from 'elements';
import classes from './LogInInfo.module.scss';

type LogInInfoProps = {
	onChange: () => void;
};

const LogInInfo: FC<LogInInfoProps> = ({ onChange }) => (
	<div className={classes.logInInfo}>
		<Button size="large" href="/api/auth/login">
			Zaloguj się
		</Button>
		<span className={classes.coupon}>
			I otrzymaj powitalny kupon rabatowy na pierwsze zamówienie!
		</span>
		<Separator>lub</Separator>
		<Button size="large" onClick={onChange}>
			Kontynuuj jako gość
		</Button>
	</div>
);

export default LogInInfo;
