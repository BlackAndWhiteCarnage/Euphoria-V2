/**
 * External dependencies
 */
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { Button, FilterCart } from 'elements';
import { GeowidgetPopup } from 'fragments';
import { handleCheckout, hasOnlyPhotoshoots } from 'utils';
import { usePopup, useIsFreeShipping } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import classes from './ShippingMethod.module.scss';

const ShippingMethod: FC = () => {
	const popup = usePopup();
	const isFreeShipping = useIsFreeShipping();
	const route = useRouter();

	const { cart, updateShippingLocation, shippingLocation } = useStateContext();

	useEffect(() => {
		hasOnlyPhotoshoots(cart) && route.push('/koszyk/podsumowanie');
	}, [cart, route]);

	const isValidShipping = shippingLocation.name !== '';

	return (
		<>
			<div className={classes.shippingMethod}>
				<Button size="large" onClick={() => popup.open()}>
					<>{!isValidShipping ? `Wybierz` : 'Zmień'} paczkomat</>
				</Button>
				{isValidShipping && (
					<p>
						Wybierz paczkomat: <b>{shippingLocation.name}</b>
						<br />
						Adres: <b>{shippingLocation.address.line1}</b>
						<b>{shippingLocation.address.line2}</b>
					</p>
				)}
				<Button
					size="large"
					disabled={!isValidShipping}
					onClick={() => handleCheckout(cart, isFreeShipping, shippingLocation)}
				>
					Przejdź do płatności
				</Button>
			</div>
			<GeowidgetPopup onLocationSelect={updateShippingLocation} {...popup} />
			<FilterCart />
		</>
	);
};

export default ShippingMethod;
