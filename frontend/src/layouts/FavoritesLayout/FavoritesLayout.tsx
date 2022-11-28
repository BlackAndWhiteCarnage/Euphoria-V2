/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Card, Grid } from 'fragments';
import { getImageUrl } from 'utils';
import { Header, Loader } from 'elements';
import { useGetProductsBySlugs } from 'hooks';
import classes from './FavoritesLayout.module.scss';

type FavoritesLayoutProps = {
	headerText: string;
};

const FavoritesLayout: FC<FavoritesLayoutProps> = ({ headerText }) => {
	const { data, fetching } = useGetProductsBySlugs();

	if (fetching) return <Loader />;

	const {
		products: { data: productsData },
	} = data;

	return (
		<div className={classes.wrapper}>
			<Header
				text={
					!productsData.length
						? 'Nie masz jeszcze ulubionych przedmiotów'
						: headerText
				}
			/>
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
