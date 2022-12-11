/**
 * External dependencies
 */
import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

/**
 * External dependencies
 */
import { Price, Favorites } from 'elements';
import { PriceProps } from 'types/price';
import { useIsFavorite } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import Link from 'next/link';
import classes from './Card.module.scss';

export type CardProps = {
	href: string;
	image: string;
	name: string;
	isPremium: boolean;
	imagesCount?: number;
	slug: string;
} & PriceProps;

const Card: FC<CardProps> = ({
	href,
	image,
	imagesCount,
	isPremium,
	name,
	...props
}) => {
	const { addToFavorites, removeFromFavorites } = useStateContext();
	const isFavorite = useIsFavorite(props.slug);

	return (
		<div className={classes.card}>
			<div className={classes.favorite}>
				<Favorites
					isFavorite={isFavorite}
					onClick={() =>
						isFavorite
							? removeFromFavorites(props.slug)
							: addToFavorites(props.slug)
					}
				/>
			</div>
			<Link href={href} title={`Przejdź do - ${name}`}>
				<div>
					<div
						className={classnames(classes.image, {
							[classes['is-premium']]: isPremium,
						})}
					>
						<Image src={image} alt={name} fill />
					</div>
					<p className={classes.name}>
						{imagesCount && <b>{imagesCount} Zdjęć | </b>}
						{isPremium && <b className={classes.isPremium}>Premium | </b>}
						{name}
					</p>
					<Price {...props} />
				</div>
			</Link>
		</div>
	);
};

export default Card;
