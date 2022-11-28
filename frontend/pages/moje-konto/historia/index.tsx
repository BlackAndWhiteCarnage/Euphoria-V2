/**
 * External dependencies
 */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const UserAccountOrderHistory = () => <h1>Moje konto Historia Zamówień</h1>;

export default withPageAuthRequired(UserAccountOrderHistory);
