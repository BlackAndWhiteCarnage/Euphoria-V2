/**
 * External dependencies
 */
import { FC, useState } from 'react';

/**
 * Internal dependencies
 */
import { Button, FilterCart, Price } from 'elements';
import {
	calcPrice,
	calcExtrasPrice,
	hasOnlyPhotoshoots,
	handleCheckout,
} from 'utils';
import { useIsFreeShipping } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import { TermsOfUse } from 'fragments';
import classes from './Summary.module.scss';

const Summary: FC = () => {
	const { cart } = useStateContext();
	const isFreeShipping = useIsFreeShipping();
	const price = calcPrice(cart);
	const extras = calcExtrasPrice(cart);
	const hasOnlyPhotos = hasOnlyPhotoshoots(cart);
	const hasExtraExtrases = extras !== 0;

	const [isAccepted, setIsAccepted] = useState(false);

	const createOrderedItemsData = (orderItems: any) => {
		const dataArr: any = [];

		orderItems.forEach(({ title, price: p }: any) =>
			dataArr.push(title, p, '|')
		);

		return dataArr.toString();
	};

	return (
		<>
			<div className={classes.summary}>
				<div className={classes.details}>
					<div>
						Wartość produktów: <Price price={price} />
					</div>
					{hasExtraExtrases && (
						<div>
							Extra dodatki: <Price price={extras} />
						</div>
					)}
					<div>
						Dostawa:{' '}
						{isFreeShipping ? (
							<Price isFree price={13.99} />
						) : (
							<Price price={13.99} />
						)}
					</div>
				</div>
				<div className={classes.total}>
					Razem: <Price price={price + extras + (isFreeShipping ? 0 : 13.99)} />
				</div>
				{hasOnlyPhotos ? (
					<>
						<TermsOfUse
							onChange={({ target }: any) => setIsAccepted(target.checked)}
							checked={isAccepted}
						/>
						<Button
							disabled={!isAccepted}
							size="large"
							onClick={() =>
								handleCheckout(
									cart,
									isFreeShipping,
									createOrderedItemsData(cart)
								)
							}
						>
							Przejdź do płatności
						</Button>
					</>
				) : (
					<Button size="large" href="/koszyk/dostawa">
						Przejdź do dostawy
					</Button>
				)}
			</div>
			<FilterCart />
		</>
	);
};

export default Summary;
