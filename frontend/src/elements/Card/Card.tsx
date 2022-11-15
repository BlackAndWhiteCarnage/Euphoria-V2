/**
 * External dependencies
 */
import { FC } from 'react';
import Image from 'next/image';

/**
 * External dependencies
 */
import { DiscountedPrice } from 'types/price';
import { Price, Favorites } from 'elements';
import Link from 'next/link';
import classes from './Card.module.scss';

type CardProps = {
	discount?: number;
	href: string;
	image: string;
	name: string;
	price: number;
} & DiscountedPrice;

const Card: FC<CardProps> = ({ discount, href, image, name, price }) => (
	<div className={classes.card}>
		<div className={classes.favorite}>
			{/* TODO */}
			<Favorites isFavorite={false} onClick={() => {}} />
		</div>
		<Link href={href}>
			<div>
				<div className={classes.image}>
					<Image src={image} alt={name} fill />
				</div>
				<p className={classes.name}>{name}</p>
				<Price price={price} discount={discount} />
			</div>
		</Link>
	</div>
);

export default Card;
