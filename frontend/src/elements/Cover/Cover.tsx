/**
 * External dependencies
 */
import { FC, useState } from 'react';
import classnames from 'classnames';
import { toast } from 'react-hot-toast';

/**
 * Internal dependencies
 */
import { ReactComponent as Copy } from 'images/icons/copy.svg';
import { Image } from 'types';
import classes from './Cover.module.scss';

export type CoverProps = {
	discountCode?: string;
	image: Image;
	text: string;
};

const Cover: FC<CoverProps> = ({ discountCode, image: { src, alt }, text }) => {
	const [copy, setCopy] = useState(false);

	return (
		<div
			className={classnames(classes.wrapper, {
				[classes['has-discount']]: discountCode,
			})}
		>
			<p className={classes.text}>{text}</p>
			{discountCode && (
				<button
					className={classnames(classes.discountCode, {
						[classes['is-copied']]: copy,
					})}
					onClick={() => {
						navigator.clipboard.writeText(discountCode);
						setCopy(true);
						toast.success('Kod skopiowany!', {
							duration: 2000,
						});
						setTimeout(() => {
							setCopy(false);
						}, 200);
					}}
				>
					Z kodem: {discountCode}
				</button>
			)}
			<img src={src} alt={alt} className={classes.image} />
		</div>
	);
};

export default Cover;
