/**
 * External dependencies
 */
import { FC } from 'react';
import Image from 'next/image';

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
	slug: string;
} & PriceProps;

const Card: FC<CardProps> = ({ href, image, name, ...props }) => {
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
			<Link href={href}>
				<div>
					<div className={classes.image}>
						<Image src={image} alt={name} fill />
					</div>
					<p className={classes.name}>{name}</p>
					<Price {...props} />
				</div>
			</Link>
		</div>
	);
};

export default Card;
