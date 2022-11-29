/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Card, Grid } from 'fragments';
import { getImageUrl } from 'utils';
import { Header, Loader, Separator } from 'elements';
import { useGetProductsBySlugs } from 'hooks';
import classes from './FavoritesLayout.module.scss';

const FavoritesLayout: FC = () => {
	const { data, fetching } = useGetProductsBySlugs();

	if (fetching) return <Loader />;

	const {
		products: { data: productsData },
	} = data;

	return (
		<div className={classes.wrapper}>
			<Grid>
				{productsData.map(
					({ attributes: { title, images, price, slug, category } }: any) => (
						<Card
							href={`/${category.data.attributes.name}/${slug}`}
							image={getImageUrl(images)}
							name={title}
							slug={slug}
							price={price}
						/>
					)
				)}
			</Grid>
		</div>
	);
};

export default FavoritesLayout;
