/**
 * External dependencies
 */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { FavoritesLayout } from 'layouts';

const UserAccountFavorites = () => (
	<FavoritesLayout headerText="Twoje Ulubione" />
);

export default withPageAuthRequired(UserAccountFavorites);
