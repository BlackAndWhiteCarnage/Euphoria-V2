/**
 * External dependencies
 */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { FavoritesLayout, UserProfileLayout } from 'layouts';
import Head from 'next/head';

const UserAccountFavorites = () => (
	<>
		<Head>
			<title>EUPHORIA | Ulubione</title>
		</Head>
		<FavoritesLayout />
	</>
);

UserAccountFavorites.PageLayout = withPageAuthRequired(UserProfileLayout);

export default UserAccountFavorites;
