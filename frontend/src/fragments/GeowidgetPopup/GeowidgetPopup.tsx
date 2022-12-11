/**
 * External dependencies
 */
import { FC, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { Header, Popup } from 'elements';
import { PopupProps } from 'elements/Popup/Popup';
import classes from './GeowidgetPopup.module.scss';

type GeowidgetPopupProps = {
	onLocationSelect: (value: any) => void;
} & PopupProps;

const GeowidgetPopup: FC<GeowidgetPopupProps> = ({
	onLocationSelect,
	...props
}) => {
	document.addEventListener('onpointselect', ({ detail }: any) => {
		onLocationSelect({
			name: detail.name,
			address: detail.address,
		});

		props.close();
	});

	return (
		<Popup {...props}>
			<div className={classes.popup}>
				<Header text="Wybierz paczkomat" />
				{props.isOpen && (
					<inpost-geowidget
						onpoint="onpointselect"
						token={process.env.NEXT_PUBLIC_GEOWIDGET}
						language="pl"
						config="parcelcollect"
					/>
				)}
			</div>
		</Popup>
	);
};

export default GeowidgetPopup;
