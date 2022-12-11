/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Header, Loader, Separator } from 'elements';
import { Slider } from 'fragments';
import { useGetSliderProducts } from 'hooks';
import classes from './SliderProvider.module.scss';

type SliderProviderProps = {
	specyficCategory?: string;
	description?: string;
};

const SliderProvider: FC<SliderProviderProps> = ({
	specyficCategory,
	description,
}) => {
	const { items, ready, category } = useGetSliderProducts(specyficCategory);

	return (
		<article className={classes.sliderWrap}>
			<Header
				text={
					!specyficCategory
						? `Inne w kategorii ${ready && category}`
						: specyficCategory
				}
			/>
			{description && <p className={classes.description}>{description}</p>}
			<Separator top={10} bottom={10} mobileBottom={10} mobileTop={10} />
			{ready && items?.length > 3 ? <Slider items={items} /> : <Loader />}
		</article>
	);
};

export default SliderProvider;
