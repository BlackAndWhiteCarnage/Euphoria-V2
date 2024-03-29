import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export default handleAuth({
	// other stuff here...
	async callback(req, res) {
		try {
			await handleCallback(req, res);
		} catch (error) {
			res.redirect('/');
		}
	},
});
