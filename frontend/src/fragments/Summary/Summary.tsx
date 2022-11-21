/**
 * External dependencies
 */
import { Button, Header } from 'elements';
import { FC } from 'react';

/**
 * Internal dependencies
 */
import classes from './Summary.module.scss';

type SummaryProps = {
	onChange: () => {};
};

const Summary: FC<SummaryProps> = ({ onChange }) => (
	<div className={classes.summary}>
		<Header text="Podsumowanie" />
		<div className={classes.details}>
			<p>Wartość produktów: 470,00 zł</p>
			<p>Extra dodatki: 20,00 zł</p>
			<p>Dostawa: 20,00 zł</p>
		</div>
		<p className={classes.total}>Razem: 493, 99 zł</p>
		<Button size="large" onChange={onChange}>
			Przejdź do dostawy
		</Button>
	</div>
);

export default Summary;
