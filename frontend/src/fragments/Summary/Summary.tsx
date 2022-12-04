/**
 * External dependencies
 */
import { FC } from 'react';

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
import classes from './Summary.module.scss';

const Summary: FC = () => {
	const { cart } = useStateContext();
	const isFreeShipping = useIsFreeShipping();
	const price = calcPrice(cart);
	const extras = calcExtrasPrice(cart);
	const hasOnlyPhotos = hasOnlyPhotoshoots(cart);
	const hasExtraExtrases = extras !== 0;

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
					<Button
						size="large"
						onClick={() => handleCheckout(cart, isFreeShipping)}
					>
						Przejdź do płatności
					</Button>
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
