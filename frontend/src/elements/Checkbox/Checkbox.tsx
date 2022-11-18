/**
 * External dependencies
 */
import { FC, InputHTMLAttributes } from 'react';

/**
 * External dependencies
 */
import classes from './Checkbox.module.scss';

type CheckboxProps = {
	checked?: boolean;
	id: string;
	onChange: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * Checkbox component
 */
const Checkbox: FC<CheckboxProps> = ({
	checked = false,
	id,
	onChange,
	...props
}) => (
	<label htmlFor={id}>
		<input
			{...props}
			type="checkbox"
			id={id}
			className={classes.input}
			checked={checked}
			onChange={() => onChange(id)}
		/>
		<span className={classes.checkboxMark} />
	</label>
);

export default Checkbox;
