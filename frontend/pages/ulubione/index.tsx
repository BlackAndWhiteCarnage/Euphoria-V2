/**
 * Internal dependencies
 */
import { FavoritesLayout } from 'layouts';
import Head from 'next/head';

const Favorites = () => (
	<>
		<Head>
			<title>EUPHORIA | Ulubione</title>
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
		</Head>
		<FavoritesLayout label="Ulubione" />
	</>
);

export default Favorites;
