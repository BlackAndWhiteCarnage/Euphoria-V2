/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { LinkedIcon } from 'elements';
import { ReactComponent as Heart } from 'images/icons/heart.svg';
import { ReactComponent as Person } from 'images/icons/person.svg';
import { ReactComponent as Shopper } from 'images/icons/shopper.svg';
import { useStateContext } from 'contexts/CartContext';
import { useUser } from '@auth0/nextjs-auth0';
import classes from './IconsProvider.module.scss';

const IconsProvider: FC = () => {
	const { cart, favorites } = useStateContext();
	const { user } = useUser();

	return (
		<div className={classes.icons}>
			<LinkedIcon
				href={!user ? '/ulubione' : '/moje-konto/ulubione'}
				icon={<Heart />}
				count={favorites.length}
			/>
			<LinkedIcon href="/moje-konto" icon={<Person />} />
			<LinkedIcon href="/koszyk" icon={<Shopper />} count={cart.length} />
		</div>
	);
};

export default IconsProvider;
