/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Button, Header, Price } from 'elements';
import { calcPrice, calcExtrasPrice, hasOnlyPhotoshoots } from 'utils';
import { useIsFreeShipping } from 'hooks';
import { CartItemType } from 'contexts/CartContext';
import classes from './Summary.module.scss';

type SummaryProps = {
	cart: Array<CartItemType>;
	onChange: () => void;
};

const Summary: FC<SummaryProps> = ({ cart, onChange }) => {
	const isFreeShipping = useIsFreeShipping();

	const price = calcPrice(cart);
	const extras = calcExtrasPrice(cart);
	const hasOnlyPhotos = hasOnlyPhotoshoots(cart);
	const hasExtraExtrases = extras !== 0;

	return (
		<div className={classes.summary}>
			<Header text="Podsumowanie" />
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
			<Button size="large" onClick={onChange}>
				{hasOnlyPhotos ? 'Przejdź do płatności' : 'Przejdź do dostawy'}
			</Button>
		</div>
	);
};

export default Summary;
