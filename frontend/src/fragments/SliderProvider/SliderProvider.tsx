/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Loader } from 'elements';
import { Slider } from 'fragments';
import { useGetSliderProducts } from 'hooks';

type SliderProviderProps = {
	category?: string;
};

const SliderProvider: FC<SliderProviderProps> = ({ category }) => {
	const { items, ready, error } = useGetSliderProducts(category);

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return <Slider items={items} />;
};

export default SliderProvider;
