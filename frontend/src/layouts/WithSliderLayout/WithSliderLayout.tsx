/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';

/**
 * Internal dependencies
 */
import { SliderProvider } from 'fragments';
import classes from './WithSliderLayout.module.scss';

const WithSliderLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		{children}
		<div className={classes.slider}>
			<SliderProvider />
		</div>
	</>
);

export default WithSliderLayout;
