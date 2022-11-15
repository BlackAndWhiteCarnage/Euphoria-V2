/**
 * External dependencies
 */
import { FC } from 'react';
import Image from 'next/image';

/**
 * External dependencies
 */
import { PriceProps } from 'types/price';
import { Price, Favorites } from 'elements';
import Link from 'next/link';
import classes from './Card.module.scss';

type CardProps = {
	href: string;
	image: string;
	name: string;
} & PriceProps;

const Card: FC<CardProps> = ({ href, image, name, ...props }) => (
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
				<Price {...props} />
			</div>
		</Link>
	</div>
);

export default Card;
