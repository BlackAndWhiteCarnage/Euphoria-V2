/**
 * Internal dependencies
 */
import { GridLayout, WithFooterLayout, WithFormLayout } from 'layouts';

const Category = () => (
	<WithFormLayout>
		<GridLayout />
	</WithFormLayout>
);

Category.PageLayout = WithFooterLayout;

export default Category;
