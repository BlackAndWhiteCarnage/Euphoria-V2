/**
 * External dependencies
 */
import { FC, InputHTMLAttributes } from 'react';

/**
 * External dependencies
 */
import classes from './Checkbox.module.scss';

export type CheckboxProps = {
	checked?: boolean;
	id: string;
	getValue?: boolean;
	onChange: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * Checkbox component
 */
const Checkbox: FC<CheckboxProps> = ({
	checked = false,
	id,
	onChange,
	getValue = false,
	...props
}) => (
	<label htmlFor={id}>
		<input
			{...props}
			type="checkbox"
			id={id}
			className={classes.input}
			checked={checked}
			onChange={(e: any) => {
				onChange(!getValue ? (e.target.dataset.item as string) : e);
			}}
		/>
		<span className={classes.checkboxMark} />
	</label>
);

export default Checkbox;
