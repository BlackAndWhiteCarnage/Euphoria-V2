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
import { useRouter } from 'next/router';
import { useStateContext } from 'contexts/CartContext';
import { useUser } from '@auth0/nextjs-auth0';
import classes from './IconsProvider.module.scss';

const IconsProvider: FC = () => {
	const route = useRouter();
	const { cart } = useStateContext();
	const { user } = useUser();

	return (
		<div className={classes.icons}>
			<LinkedIcon href="/moje-konto/ulubione" icon={<Heart />} />
			{!user ? (
				<button onClick={() => route.push('/api/auth/login')}>Login</button>
			) : (
				<LinkedIcon href="/moje-konto" icon={<Person />} />
			)}

			<LinkedIcon href="/koszyk" icon={<Shopper />} count={cart.length} />
		</div>
	);
};

export default IconsProvider;
