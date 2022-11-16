/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import classes from './LinkedIcon.module.scss';

export type LinkedIconProps = {
	count?: number;
	href: string;
	icon: ReactElement;
};

const LinkedIcon: FC<LinkedIconProps> = ({ count, href, icon }) => (
	<Link href={href}>
		<div className={classes.linkedIcon}>
			{icon}
			<span
				className={classnames(classes.count, {
					[classes['is-visible']]: count,
				})}
			>
				{count}
			</span>
		</div>
	</Link>
);

export default LinkedIcon;
