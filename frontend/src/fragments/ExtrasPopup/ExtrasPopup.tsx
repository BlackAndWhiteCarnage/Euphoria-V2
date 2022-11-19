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
import classes from './ExtrasPopup.module.scss';

type ExtrasPopupProps = {
	items: Array<string>;
	onChange: (selected: Array<string>) => void;
	count: number;
} & PopupProps;

const ExtrasPopup: FC<ExtrasPopupProps> = ({
	items,
	onChange,
	count,
	...props
}) => (
	<Popup {...props}>
		<div className={classes.extras}>
			<Header text="Wybierz dodatki" />
			<p className={classes.info}>
				*Do tego przedmiotu są {count} dodatki w cenie, każdy kolejny to +10.00
				zł
			</p>
			<Separator />
			<List items={items} onChange={onChange} />
			<Separator />
			<div className={classes.buttons}>
				<Button size="large">Wybieram, przejdź do koszyka</Button>
				<Button type="alert" size="large" onClick={() => props.close()}>
					Anuluj
				</Button>
			</div>
		</div>
	</Popup>
);

export default ExtrasPopup;
