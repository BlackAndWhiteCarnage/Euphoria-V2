/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Box, Button, Price } from 'elements';
import { Image as ImageType } from 'types';
import { PriceProps } from 'types/price';
import Image from 'next/image';
import classes from './ItemPreview.module.scss';

type ItemPreviewProps = {
	extras?: Array<string>;
	image: ImageType;
	title: string;
} & PriceProps;

const ItemPreview: FC<ItemPreviewProps> = ({
	extras,
	image,
	title,
	...props
}) => (
	<Box>
		<div className={classes.itemPreview}>
			<div className={classes.image}>
				<Image src={image.src} alt={image.alt} fill />
			</div>
			<div className={classes.itemPreviewInner}>
				<div className={classes.itemInfo}>
					<h2 className={classes.name}>{title}</h2>
					{extras && (
						<>
							<p className={classes.extrasLabel}>
								Wybrane dodatki ({extras.length})
							</p>
							<ul className={classes.extras}>
								{extras.map((el, i) => (
									<li key={i} className={classes.extrasItem}>
										{el}
									</li>
								))}
							</ul>
						</>
					)}
				</div>
				<div className={classes.otherInfo}>
					{/* TODO */}
					<Price {...props} />
					{extras && <Button>Zmień dodatki</Button>}
					<Button type="alert">Usuń</Button>
				</div>
			</div>
		</div>
	</Box>
);

export default ItemPreview;
