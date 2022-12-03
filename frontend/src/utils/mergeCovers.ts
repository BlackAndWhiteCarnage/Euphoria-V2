/**
 * Internal dependencies
 */
import { CoverProps } from 'elements/Cover/Cover';

const mergeCovers = (
	stripeCovers: Array<any>,
	strapiCovers: any
): Array<CoverProps> => {
	const covers: Array<CoverProps> = [];

	stripeCovers.forEach(({ name, metadata }) => {
		covers.push({
			text: metadata.tekst,
			image: {
				src: metadata.zdjęcie,
				alt: metadata.tekst,
			},
			discountCode: name,
		});
	});

	strapiCovers.posters.data.forEach(({ attributes: { image, text } }: any) => {
		covers.push({
			text,
			image: {
				src: image,
				alt: text,
			},
		});
	});

	return covers;
};

export default mergeCovers;
