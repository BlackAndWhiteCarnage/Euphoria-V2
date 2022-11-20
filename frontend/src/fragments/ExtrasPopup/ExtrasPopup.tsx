/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Header, Separator, Button, Popup, Checkbox } from 'elements';
import { PopupProps } from 'elements/Popup/Popup';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import classes from './ExtrasPopup.module.scss';

type ExtrasPopupProps = {
	choosen: Array<string>;
	count: number | undefined;
	id: string;
	items: Array<string>;
	label: string;
	onCancel: () => void;
	onChange: CheckboxProps['onChange'];
	onConfirm: () => void;
} & PopupProps;

const ExtrasPopup: FC<ExtrasPopupProps> = ({
	choosen,
	count,
	id,
	items,
	label,
	onCancel,
	onChange,
	onConfirm,
	...props
}) => (
	<Popup
		{...props}
		close={() => {
			onCancel();
			props.close();
		}}
	>
		<div className={classes.extras}>
			<Header text={label} />
			<p className={classes.info}>
				*Do tego przedmiotu{' '}
				{count
					? `są ${count} dodatki gratis!, Każdy kolejny to +10.00 zł.`
					: `jest nieograniczona liczba dodatków gratis!`}{' '}
				Wybierz z listy poniżej te które Cię interesują a zrealizuję je
				specjalnie dla Ciebie
			</p>
			<Separator />
			<div className={classes.list}>
				{items.map((item, i) => (
					<li key={i} className={classes.listItem}>
						<Checkbox
							data-item={item}
							id={`${id}-${item}`}
							onChange={onChange}
							checked={choosen && choosen.includes(item)}
						/>
						<label htmlFor={`${id}-${item}`}>{item}</label>
					</li>
				))}
			</div>
			<Separator />
			<div className={classes.buttons}>
				<Button
					size="large"
					onClick={() => {
						onConfirm();
						props.close();
					}}
				>
					Wybieram
				</Button>
				<Button
					type="alert"
					size="large"
					onClick={() => {
						onCancel();
						props.close();
					}}
				>
					Anuluj
				</Button>
			</div>
		</div>
	</Popup>
);

export default ExtrasPopup;
