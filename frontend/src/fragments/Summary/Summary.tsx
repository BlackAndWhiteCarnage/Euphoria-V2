/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { calcPrice, calcExtrasPrice, hasOnlyPhotoshoots } from 'utils';
import { Button, Header, Price } from 'elements';
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
					{calcPrice(cart) + calcExtrasPrice(cart) >= freeShippingTreshold ||
					hasOnlyPhotoshoots(cart) ? (
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
						(calcPrice(cart) + calcExtrasPrice(cart) >= freeShippingTreshold
							? 0
							: hasOnlyPhotoshoots(cart)
							? 0
							: 13.99)
					}
				/>
			</div>
			<Button size="large" onClick={onChange}>
				{!hasOnlyPhotoshoots(cart)
					? 'Przejdź do dostawy'
					: 'Przejdź do płatności'}
			</Button>
		</div>
	);
};

export default Summary;
