/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { ReactComponent as FavoritesMinus } from 'images/icons/heart-minus.svg';
import { ReactComponent as FavoritesPlus } from 'images/icons/heart-plus.svg';
import classes from './Favorites.module.scss';

type FavoritesProps = {
	isFavorite: boolean;
	onClick: () => void;
};

const Favorites: FC<FavoritesProps> = ({ isFavorite, onClick }) => (
	<button
		onClick={onClick}
		className={classnames(classes.favorites, {
			[classes['is-favorite']]: isFavorite,
		})}
	>
		<FavoritesMinus
			className={classnames(classes.favoritesIcon, classes.minus)}
		/>
		<FavoritesPlus
			className={classnames(classes.favoritesIcon, classes.plus)}
		/>
	</button>
);

export default Favorites;
