/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Button, Popup } from 'elements';
import { PopupProps } from 'elements/Popup/Popup';
import classes from './InfoPopup.module.scss';

type InfoPopupProps = {
	label: string;
} & PopupProps;

const InfoPopup: FC<InfoPopupProps> = ({ label, ...props }) => (
	<Popup {...props}>
		<div className={classes.wrapper}>
			<p className={classes.info}>{label}</p>
			<Button
				size="large"
				onClick={() => {
					props.close();
				}}
			>
				Rozumiem
			</Button>
		</div>
	</Popup>
);

export default InfoPopup;
