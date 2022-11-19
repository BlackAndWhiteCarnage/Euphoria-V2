/**
 * External dependencies
 */
import { FC, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { LinkedIcon } from 'elements';
import { ReactComponent as Heart } from 'images/icons/heart.svg';
import { ReactComponent as Person } from 'images/icons/person.svg';
import { ReactComponent as Shopper } from 'images/icons/shopper.svg';
import { useStateContext } from 'contexts/CartContext';
import classes from './IconsProvider.module.scss';

const IconsProvider: FC = () => {
	const { cart } = useStateContext();

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<div className={classes.icons}>
			<LinkedIcon href="/moje-konto/ulubione" icon={<Heart />} />
			<LinkedIcon href="/moje-konto" icon={<Person />} />
			<LinkedIcon href="/koszyk" icon={<Shopper />} count={cart.length} />
		</div>
	);
};

export default IconsProvider;
