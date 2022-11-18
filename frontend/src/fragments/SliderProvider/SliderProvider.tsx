/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Loader, Header } from 'elements';
import { Slider } from 'fragments';
import { useGetSliderProducts } from 'hooks';
import classes from './SliderProvider.module.scss';

type SliderProviderProps = {
	category?: string;
	label?: string;
};

const SliderProvider: FC<SliderProviderProps> = ({ category, label }) => {
	const { items, ready, error } = useGetSliderProducts(category);

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;
	if (items.length < 3) return null;

	return (
		<div className={classes.sliderWrap}>
			{label && <Header text={label} />}
			<Slider items={items} />
		</div>
	);
};

export default SliderProvider;
