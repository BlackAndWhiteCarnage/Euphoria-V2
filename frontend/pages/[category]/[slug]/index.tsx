/**
 * Internal dependencies
 */
import Head from 'next/head';
import { ProductLayout, WithSliderLayout, WithFormLayout } from 'layouts';

const Product = () => (
	<>
		<Head>
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
		</Head>
		<WithSliderLayout>
			<ProductLayout />
		</WithSliderLayout>
	</>
);

Product.PageLayout = WithFormLayout;

export default Product;
