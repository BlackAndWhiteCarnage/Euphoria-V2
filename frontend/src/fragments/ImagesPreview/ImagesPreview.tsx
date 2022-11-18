/**
 * External dependencies
 */
import { FC, useState } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Image as ImageType } from 'types';
import classes from './ImagesPreview.module.scss';

export type ImagesPreviewProps = {
	images: Array<ImageType>;
};

const ImagesPreview: FC<ImagesPreviewProps> = ({ images }) => {
	const [current, setCurrent] = useState(0);

	return (
		<div className={classes.imagesPreview}>
			<div className={classes.bigImageWrap}>
				{images.map(({ src, alt }, i) => (
					<div
						key={i}
						className={classnames(classes.bigImage, {
							[classes['is-visible']]: i === current,
						})}
					>
						<img src={src} alt={alt} />
					</div>
				))}
			</div>
			<div className={classes.imagesNav}>
				{images.map(({ src, alt }, i) => (
					<button
						key={i}
						className={classnames(classes.imagesNavItem, {
							[classes['is-active']]: i === current,
						})}
						onClick={() => setCurrent(i)}
					>
						<img src={src} alt={alt} />
					</button>
				))}
			</div>
		</div>
	);
};

export default ImagesPreview;
