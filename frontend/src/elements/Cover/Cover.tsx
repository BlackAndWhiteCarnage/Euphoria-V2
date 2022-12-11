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
import Button from 'elements/Button';
import classes from './Cover.module.scss';

export type CoverProps = {
	discountCode?: string;
	image: Image;
	text: string;
	link?: string;
};

const Cover: FC<CoverProps> = ({
	discountCode,
	image: { src, alt },
	text,
	link,
}) => {
	const [copy, setCopy] = useState(false);

	return (
		<div
			className={classnames(classes.wrapper, {
				[classes['has-discount']]: discountCode,
				[classes['has-link']]: link,
			})}
		>
			<p className={classes.text}>{text}</p>
			{link && (
				<a
					className={classes.link}
					href={link}
					target="_blank"
					rel="noreferrer"
				>
					Sprawdź
				</a>
			)}
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
