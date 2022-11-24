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
import classes from './ShippingMethod.module.scss';

type ShippingMethodProps = {
	location: any;
	onLocationSelect: (value: string) => void;
	onChange: () => void;
};

const ShippingMethod: FC<ShippingMethodProps> = ({
	location,
	onLocationSelect,
	onChange,
}) => {
	const popup = usePopup();

	const isLocationSet = location.name !== '';

	return (
		<>
			<div className={classes.shippingMethod}>
				<Header text="Dostawa" />
				<Button size="large" onClick={() => popup.open()}>
					<>{!isLocationSet ? `Wybierz` : 'Zmień'} paczkomat</>
				</Button>
				{isLocationSet && (
					<p>
						Wybierz paczkomat: <b>{location.name}</b>
						<br />
						Adres: <b>{location.address.line1}</b>
						<b>{location.address.line2}</b>
					</p>
				)}
				<Button size="large" disabled={!isLocationSet} onClick={onChange}>
					Przejdź do płatności
				</Button>
			</div>
			<GeowidgetPopup
				onChange={onChange}
				onLocationSelect={onLocationSelect}
				{...popup}
			/>
		</>
	);
};

export default ShippingMethod;
