/**
 * Internal dependencies
 */
import { ProductLayout, WithSliderLayout, WithFormLayout } from 'layouts';

const Product = () => (
	<WithSliderLayout>
		<ProductLayout />
	</WithSliderLayout>
);

Product.PageLayout = WithFormLayout;

export default Product;
