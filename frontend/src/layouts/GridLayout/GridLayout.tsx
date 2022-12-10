/**
 * External dependencies
 */
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { getImageUrl } from 'utils';
import { Grid, Card } from 'fragments';
import { Loader } from 'elements';
import { useGetAllCategoryProducts } from 'hooks';

const GridLayout = () => {
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
					{products
						.slice(0)
						.reverse()
						.map(
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

export default GridLayout;
