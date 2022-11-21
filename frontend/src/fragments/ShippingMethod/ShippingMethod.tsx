/**
 * External dependencies
 */
import { Button, Header } from 'elements';
import { FC } from 'react';

/**
 * Internal dependencies
 */
import classes from './ShippingMethod.module.scss';

type ShippingMethodProps = {
	onChange: () => {};
};

const ShippingMethod: FC<ShippingMethodProps> = ({ onChange }) => (
	<div className={classes.shippingMethod}>
		<Header text="Dostawa" />
		<Button size="large">Wybierz paczkomat</Button>
		<Button size="large" disabled onClick={onChange}>
			Przejdź do płatności
		</Button>
	</div>
);

export default ShippingMethod;
