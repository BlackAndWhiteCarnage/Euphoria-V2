/**
 * External dependencies
 */
import { ReactElement, useRef } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

/**
 * Internal dependencies
 */
import classes from './Navigation.module.scss';

type NavigationProps<T extends Record<string, string>> = {
	activeTab: keyof T;
	onChange?: (activeTab: keyof T) => void;
	tabs: T;
};

/**
 * Navigation component
 */
const Navigation = <T extends Record<string, string>>({
	activeTab,
	onChange,
	tabs,
}: NavigationProps<T>): ReactElement | null => {
	const listRef = useRef<HTMLUListElement>(null);
	const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);

	const activeTabIndex = Object.keys(tabs).findIndex(
		(key) => activeTab === key
	);

	const getAttribute = <A extends keyof HTMLLIElement>(attribute: A) => {
		return listItemsRef.current && activeTabIndex !== undefined
			? listItemsRef.current[activeTabIndex]?.[attribute] || 0
			: 0;
	};

	const width = `${getAttribute('offsetWidth')}px`;
	const left = `${getAttribute('offsetLeft')}px`;

	return (
		<div className={classes.navigation}>
			<ul className={classes.wrap} ref={listRef}>
				{Object.entries(tabs).map(([key, value], index) => (
					<li
						key={key}
						className={classes.itemWrap}
						ref={(el) => (listItemsRef.current[index] = el)}
					>
						<Link href={`/${key}`}>
							<button
								className={classnames(classes.item, {
									[classes['is-active']]: activeTab === key,
								})}
								onClick={() => onChange && onChange(key)}
							>
								{key}
							</button>
						</Link>
					</li>
				))}
			</ul>
			<div className={classes.indicator} style={{ width, left }} />
		</div>
	);
};

export default Navigation;
