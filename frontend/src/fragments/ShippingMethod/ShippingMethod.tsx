/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Button, Header } from 'elements';
import { GeowidgetPopup } from 'fragments';
import { usePopup } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import classes from './ShippingMethod.module.scss';

type ShippingMethodProps = {
	onChange: () => void;
};

const ShippingMethod: FC<ShippingMethodProps> = ({ onChange }) => {
	const popup = usePopup();

	const { updateShippingLocation, shippingLocation } = useStateContext();

	return (
		<>
			<div className={classes.shippingMethod}>
				<Header text="Dostawa" />
				<Button size="large" onClick={() => popup.open()}>
					<>{!shippingLocation ? `Wybierz` : 'Zmień'} paczkomat</>
				</Button>
				{shippingLocation && (
					<p>
						Wybierz paczkomat: <b>{shippingLocation.name}</b>
						<br />
						Adres: <b>{shippingLocation.address.line1}</b>
						<b>{shippingLocation.address.line2}</b>
					</p>
				)}
				<Button size="large" disabled={!shippingLocation} onClick={onChange}>
					Przejdź do płatności
				</Button>
			</div>
			<GeowidgetPopup
				onChange={onChange}
				onLocationSelect={updateShippingLocation}
				{...popup}
			/>
		</>
	);
};

export default ShippingMethod;
