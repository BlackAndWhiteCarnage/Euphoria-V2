/**
 * External dependencies
 */
import { FC, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { calcPrice, calcExtrasPrice } from 'utils';
import { Button, Header, Price } from 'elements';
import { useStateContext } from 'contexts/CartContext';
import classes from './Summary.module.scss';

type SummaryProps = {
	cart: Array<any>;
	onChange: () => void;
};

const Summary: FC<SummaryProps> = ({ onChange, cart }) => {
	const freeShippingTreshold = 150;

	return (
		<div className={classes.summary}>
			<Header text="Podsumowanie" />
			<div className={classes.details}>
				<div>
					Wartość produktów: <Price price={calcPrice(cart)} />
				</div>
				{calcExtrasPrice(cart) !== 0 && (
					<div>
						Extra dodatki: <Price price={calcExtrasPrice(cart)} />
					</div>
				)}
				<div>
					Dostawa:{' '}
					{calcPrice(cart) >= freeShippingTreshold ? (
						<Price isFree price={13.99} />
					) : (
						<Price price={13.99} />
					)}
				</div>
			</div>
			<div className={classes.total}>
				Razem:{' '}
				<Price
					price={
						calcPrice(cart) +
						calcExtrasPrice(cart) +
						(calcPrice(cart) >= freeShippingTreshold ? 0 : 13.99)
					}
				/>
			</div>
			<Button size="large" onClick={onChange}>
				Przejdź do dostawy
			</Button>
		</div>
	);
};

export default Summary;
