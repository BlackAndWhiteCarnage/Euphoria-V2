/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { PriceProps } from 'types/price';
import { formatPrice, substractPriceByPercentage } from 'utils';
import classes from './Price.module.scss';

const Price: FC<PriceProps> = ({ discount, isFree, price }) => (
	<p className={classes.price}>
		<span
			className={classnames({
				[classes['is-crossed-out']]: discount || isFree,
			})}
		>
			{formatPrice(price)}
		</span>
		{discount && <span>{substractPriceByPercentage(price, discount)}</span>}
		{isFree && <span>darmowa</span>}
	</p>
);

export default Price;
