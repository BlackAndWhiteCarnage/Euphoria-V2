/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import Link from 'next/link';

/**
 * Internal dependencies
 */
import classes from './LinkedIcon.module.scss';

type LinkedIconProps = {
	count?: number;
	href: string;
	icon: ReactElement;
};

const LinkedIcon: FC<LinkedIconProps> = ({ count, href, icon }) => (
	<Link href={href}>
		<div className={classes.linkedIcon}>
			{icon}
			{count && <span className={classes.count}>{count}</span>}
		</div>
	</Link>
);

export default LinkedIcon;
