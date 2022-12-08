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

type FavoritesLayoutProps = {
	label?: string;
};

const FavoritesLayout: FC<FavoritesLayoutProps> = ({ label }) => {
	const { data, fetching } = useGetProductsBySlugs();

	if (fetching) return <Loader />;

	const {
		products: { data: productsData },
	} = data;

	return (
		<div className={classes.wrapper}>
			<Header
				text={
					productsData.length > 0
						? label || ''
						: 'Nie masz żadnych przedmiotów dodanych do ulubionych'
				}
			/>
			<Grid>
				{productsData.map(
					({
						attributes: { title, images, price, slug, category, isPremium },
					}: any) => (
						<Card
							isPremium={isPremium}
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
