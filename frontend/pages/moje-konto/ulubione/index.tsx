/**
 * External dependencies
 */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { FavoritesLayout, UserProfileLayout } from 'layouts';

const UserAccountFavorites = () => <FavoritesLayout />;

UserAccountFavorites.PageLayout = withPageAuthRequired(UserProfileLayout);

export default UserAccountFavorites;
