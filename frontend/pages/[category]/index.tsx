/**
 * Internal dependencies
 */
import Head from 'next/head';
import { GridLayout, WithFooterLayout, WithFormLayout } from 'layouts';

const Category = () => (
	<>
		<Head>
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
		</Head>
		<WithFormLayout>
			<GridLayout />
		</WithFormLayout>
	</>
);

Category.PageLayout = WithFooterLayout;

export default Category;
