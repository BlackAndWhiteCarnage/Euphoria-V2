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
	location: string;
	onLocationSelect: (value: string) => void;
	onChange: () => void;
};

const ShippingMethod: FC<ShippingMethodProps> = ({
	location,
	onLocationSelect,
	onChange,
}) => {
	const popup = usePopup();

	return (
		<>
			<div className={classes.shippingMethod}>
				<Header text="Dostawa" />
				<Button size="large" onClick={() => popup.open()}>
					Wybierz paczkomat
				</Button>
				{location && (
					<p>
						Wybrany paczkomat: <b>{location}</b>
					</p>
				)}
				<Button size="large" disabled={!location} onClick={onChange}>
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
