/**
 * External dependencies
 */
import { FC } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Internal dependencies
 */
import Cover, { CoverProps } from 'elements/Cover/Cover';

type CoversProps = {
	covers: Array<CoverProps>;
};

const Covers: FC<CoversProps> = ({ covers }) => (
	<>
		{covers && (
			<Swiper
				modules={[Autoplay]}
				autoplay={{
					delay: 4000,
					disableOnInteraction: true,
				}}
				spaceBetween={40}
				loop
			>
				{covers.map((props, i) => (
					<SwiperSlide key={i}>
						<Cover {...props} />
					</SwiperSlide>
				))}
			</Swiper>
		)}
	</>
);

export default Covers;
