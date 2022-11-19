/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Header, Separator, Button, Popup } from 'elements';
import { List } from 'fragments';
import { PopupProps } from 'elements/Popup/Popup';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import classes from './ExtrasPopup.module.scss';

type ExtrasPopupProps = {
	choosenItems: Array<string>;
	count: number;
	items: Array<string>;
	onChange: CheckboxProps['onChange'];
	onConfirm: () => void;
} & PopupProps;

const ExtrasPopup: FC<ExtrasPopupProps> = ({
	choosenItems,
	count,
	items,
	onChange,
	onConfirm,
	...props
}) => (
	<Popup {...props}>
		<div className={classes.extras}>
			<Header text="A może coś gratis?" />
			<p className={classes.info}>
				*Do tego przedmiotu są {count} dodatki gratis! Każdy kolejny to +10.00
				zł. Wybierz z listy poniżej te które Cię interesują a zrealizuję je
				specjalnie dla Ciebie
			</p>
			<Separator />
			<List items={items} onChange={onChange} choosenItems={choosenItems} />
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
				<Button type="alert" size="large" onClick={() => props.close()}>
					Anuluj
				</Button>
			</div>
		</div>
	</Popup>
);

export default ExtrasPopup;
