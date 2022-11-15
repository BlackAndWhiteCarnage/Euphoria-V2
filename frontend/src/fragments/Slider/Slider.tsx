/**
 * External dependencies
 */
import { FC, useRef, useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { Card } from 'fragments';
import { CardProps } from 'fragments/Card/Card';
import welcome from 'images/welcome.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import classes from './Slider.module.scss';

type SliderProps = {
	items: Array<CardProps>;
};

const Slider: FC<SliderProps> = ({ items }) => {
	const swiperRef = useRef<SwiperCore>();

	return (
		<div>
			<Swiper
				className={classes.swiper}
				spaceBetween={10}
				slidesPerView={2}
				breakpoints={{
					1000: {
						slidesPerView: 3,
						spaceBetween: 40,
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
			<button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
			<button onClick={() => swiperRef.current?.slideNext()}>Next</button>
		</div>
	);
};

export default Slider;
