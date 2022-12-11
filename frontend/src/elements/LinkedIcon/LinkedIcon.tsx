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
	title: string;
	count?: number;
	href: string;
	icon: ReactElement;
};

const LinkedIcon: FC<LinkedIconProps> = ({ count, href, icon, title }) => (
	<Link href={href} legacyBehavior>
		<a className={classes.linkedIcon} href={href} title={title}>
			{icon}
			<span
				className={classnames(classes.count, {
					[classes['is-visible']]: count,
				})}
			>
				{count}
			</span>
		</a>
	</Link>
);

export default LinkedIcon;
