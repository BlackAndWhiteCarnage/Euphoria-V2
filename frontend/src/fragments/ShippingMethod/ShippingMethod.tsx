/**
 * External dependencies
 */
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { Button, FilterCart } from 'elements';
import { GeowidgetPopup, TermsOfUse } from 'fragments';
import { handleCheckout, hasOnlyPhotoshoots } from 'utils';
import { usePopup, useIsFreeShipping, useGetProductsToDelete } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import classes from './ShippingMethod.module.scss';

const ShippingMethod: FC = () => {
	const [isAccepted, setIsAccepted] = useState(false);
	const popup = usePopup();
	const isFreeShipping = useIsFreeShipping();
	const route = useRouter();

	const { cart, updateShippingLocation, shippingLocation } = useStateContext();
	const productsToDelete = useGetProductsToDelete();

	const createOrderedItemsData = (orderItems: any) => {
		const dataArr: any = [];

		orderItems.forEach(({ title, price }: any) =>
			dataArr.push(title, price, '|')
		);

		return dataArr.toString();
	};

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
				<TermsOfUse
					onChange={({ target }: any) => setIsAccepted(target.checked)}
					checked={isAccepted}
				/>
				<Button
					size="large"
					disabled={!isValidShipping || !isAccepted}
					onClick={() =>
						handleCheckout(
							cart,
							isFreeShipping,
							createOrderedItemsData(cart),
							shippingLocation,
							productsToDelete
						)
					}
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
