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
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
		</Head>
		<FavoritesLayout />
	</>
);

UserAccountFavorites.PageLayout = withPageAuthRequired(UserProfileLayout);

export default UserAccountFavorites;
