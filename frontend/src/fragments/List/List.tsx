/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Checkbox } from 'elements';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import classes from './List.module.scss';

type ListProps = {
	choosenItems: Array<any>;
	items: Array<string>;
	onChange: CheckboxProps['onChange'];
};

const List: FC<ListProps> = ({ items, onChange, choosenItems }) => (
	<div className={classes.list}>
		{items.map((item, i) => (
			<li key={i} className={classes.listItem}>
				<Checkbox
					id={item}
					onChange={onChange}
					checked={choosenItems.includes(item)}
				/>
				<label htmlFor={item}>{item}</label>
			</li>
		))}
	</div>
);

export default List;
