/**
 * External dependencies
 */
import { FC, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { Header, Separator, Button, Popup } from 'elements';
import { PopupProps } from 'elements/Popup/Popup';
import classes from './GeowidgetPopup.module.scss';

type GeowidgetPopupProps = {
	onLocationSelect: (value: string) => void;
	onChange: (location: string) => void;
} & PopupProps;

const GeowidgetPopup: FC<GeowidgetPopupProps> = ({
	onLocationSelect,
	onChange,
	...props
}) => {
	document.addEventListener('onpointselect', ({ detail }: any) => {
		onLocationSelect(detail.name);
		props.close();
	});

	return (
		<Popup {...props}>
			<div className={classes.popup}>
				<Header text="Wybierz paczkomat" />
				<inpost-geowidget
					onpoint="onpointselect"
					token={process.env.NEXT_PUBLIC_GEOWIDGET}
					language="pl"
					config="parcelcollect"
				/>
			</div>
		</Popup>
	);
};

export default GeowidgetPopup;
