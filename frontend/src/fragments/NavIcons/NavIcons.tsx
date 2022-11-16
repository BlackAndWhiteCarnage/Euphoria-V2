/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { LinkedIcon } from 'elements';
import { LinkedIconProps } from 'elements/LinkedIcon/LinkedIcon';
import classes from './NavIcons.module.scss';

type NavIconsProps = {
	items: Array<LinkedIconProps>;
};

const NavIcons: FC<NavIconsProps> = ({ items }) => (
	<div className={classes.navIcons}>
		{items.map((props, i) => (
			<LinkedIcon {...props} key={i} />
		))}
	</div>
);

export default NavIcons;
