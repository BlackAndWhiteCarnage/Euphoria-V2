/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Header, Separator } from 'elements';
import { Slider } from 'fragments';
import { useGetSliderProducts } from 'hooks';
import classes from './SliderProvider.module.scss';

type SliderProviderProps = {
	specyficCategory?: string;
};

const SliderProvider: FC<SliderProviderProps> = ({ specyficCategory }) => {
	const { items, ready, error, category } =
		useGetSliderProducts(specyficCategory);

	if (!ready) return null;
	if (error) return <p>Error: {error.message}</p>;
	if (items.length < 3) return null;

	return (
		<div className={classes.sliderWrap}>
			<Header
				text={
					!specyficCategory ? `Inne w kategorii ${category}` : specyficCategory
				}
			/>
			<Slider items={items} />
			<Separator mobileBottom={10} mobileTop={10} />
		</div>
	);
};

export default SliderProvider;
