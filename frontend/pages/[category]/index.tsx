/**
 * Internal dependencies
 */
import { getImageUrl } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { WithFormLayout } from 'layouts';
import { useGetAllCategoryProducts } from 'hooks';

const Category = () => {
	const { products, ready, error, category } = useGetAllCategoryProducts();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Grid>
			{products.map(
				({
					attributes: { slug, title, price, images, imagesCount, isPremium },
				}) => (
					<Card
						href={`/${category}/${slug}`}
						image={getImageUrl(images)}
						imagesCount={imagesCount}
						isPremium={isPremium}
						key={slug}
						name={title}
						price={price}
						slug={slug}
					/>
				)
			)}
		</Grid>
	);
};

Category.PageLayout = WithFormLayout;

export default Category;
