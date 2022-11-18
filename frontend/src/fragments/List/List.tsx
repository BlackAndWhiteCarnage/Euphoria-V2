/**
 * External dependencies
 */
import { FC, useState, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { Checkbox } from 'elements';
import classes from './List.module.scss';

type ListProps = {
	items: Array<string>;
	onChange: (selected: Array<string>) => void;
};

const List: FC<ListProps> = ({ items, onChange }) => {
	const [selected, setSelected] = useState<Array<string>>([]);

	useEffect(() => {
		onChange(selected);
	}, [selected, onChange]);

	// TODO
	const handleToggleSingle = (id: any) =>
		setSelected(
			!selected.includes(id)
				? [...selected, id]
				: selected.filter((el) => el !== id)
		);

	return (
		<div className={classes.list}>
			{items.map((item, i) => (
				<li key={i} className={classes.listItem}>
					<Checkbox
						id={item}
						onChange={handleToggleSingle}
						checked={selected.includes(item)}
					/>
					<label htmlFor={item}>{item}</label>
				</li>
			))}
		</div>
	);
};

export default List;
