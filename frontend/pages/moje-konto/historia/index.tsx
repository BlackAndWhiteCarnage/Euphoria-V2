/**
 * External dependencies
 */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { UserProfileLayout } from 'layouts';

const UserAccountOrderHistory = () => <h1>historia</h1>;

UserAccountOrderHistory.PageLayout = withPageAuthRequired(UserProfileLayout);

export default UserAccountOrderHistory;
