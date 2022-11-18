/**
 * External dependencies
 */
import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames';
import SwiperCore from 'swiper';

/**
 * Internal dependencies
 */
import { Loader } from 'elements';
import { Card } from 'fragments';
import { ReactComponent as Arrow } from 'images/icons/arrow.svg';
import { useGetSliderProducts } from 'hooks';
import classes from './Slider.module.scss';

// type SliderProps = {
// 	items: Array<CardProps>;
// };

const Slider: FC = () => {
	const [begenning, setBegenning] = useState(true);
	const [end, setEnd] = useState(false);
	const swiperRef = useRef<SwiperCore>();

	const { items, ready, error } = useGetSliderProducts();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className={classes.slider}>
			<Swiper
				onRealIndexChange={(el) => {
					setBegenning(el.isBeginning);
					setEnd(el.isEnd);
				}}
				slidesPerGroup={2}
				className={classes.swiper}
				spaceBetween={10}
				slidesPerView={2}
				breakpoints={{
					1000: {
						slidesPerView: 3,
						spaceBetween: 40,
						slidesPerGroup: 3,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{items.map((props, i) => (
					<SwiperSlide key={i}>
						<Card {...props} />
					</SwiperSlide>
				))}
			</Swiper>
			<button
				onClick={() => swiperRef.current?.slidePrev()}
				className={classnames(classes.sliderButton, classes.prev, {
					[classes['is-active']]: !begenning,
				})}
			>
				<Arrow />
			</button>
			<button
				onClick={() => swiperRef.current?.slideNext()}
				className={classnames(classes.sliderButton, classes.next, {
					[classes['is-active']]: !end,
				})}
			>
				<Arrow />
			</button>
		</div>
	);
};

export default Slider;
