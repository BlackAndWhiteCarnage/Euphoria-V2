/**
 * Internal dependencies
 */
import { getImageUrl } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { WithFormLayout } from 'layouts';
import { useGetAllCategoryProducts } from 'hooks';
import Head from 'next/head';

const Category = () => {
	const { products, ready, category } = useGetAllCategoryProducts();

	return (
		<>
			<Head>
				<title>
					EUPHORIA |{' '}
					{category && category[0].toUpperCase() + category.substring(1)}
				</title>
			</Head>
			{!ready ? (
				<Loader />
			) : (
				<Grid>
					{products.map(
						({
							attributes: {
								slug,
								title,
								price,
								images,
								imagesCount,
								isPremium,
							},
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
			)}
		</>
	);
};

Category.PageLayout = WithFormLayout;

export default Category;
