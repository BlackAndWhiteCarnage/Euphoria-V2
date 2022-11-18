/**
 * Internal dependencies
 */
import { Image } from 'types';

const formatToImagesArray = ({ data }: any, alt: string) => {
	const images: Array<Image> = [];

	data.forEach(({ attributes: { formats } }: any) => {
		images.push({
			src: formats.large.url,
			alt,
		});
	});

	return images;
};

export default formatToImagesArray;
