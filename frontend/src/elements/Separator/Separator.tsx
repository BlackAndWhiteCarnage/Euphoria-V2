/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import classes from './Separator.module.scss';

type SeparatorProps = {
	bottom?: number;
	children?: string;
	margin?: number;
	mobileBottom?: number;
	mobileTop?: number;
	top?: number;
};

const Separator: FC<SeparatorProps> = ({
	bottom,
	children,
	margin = 20,
	mobileBottom,
	mobileTop,
	top,
}) => {
	top = top === undefined ? margin : top;
	bottom = bottom === undefined ? margin : bottom;
	mobileTop = mobileTop === undefined ? top : mobileTop;
	mobileBottom = mobileBottom === undefined ? top : mobileBottom;

	return (
		<div
			style={{
				'--margin-top': `${top}px`,
				'--margin-bottom': `${bottom}px`,
				'--margin-mobile-top': `${mobileTop}px`,
				'--margin-mobile-bottom': `${mobileBottom}px`,
			}}
			className={classnames(classes.separator, {
				[classes['has-text']]: children,
			})}
		>
			{children}
		</div>
	);
};

export default Separator;
