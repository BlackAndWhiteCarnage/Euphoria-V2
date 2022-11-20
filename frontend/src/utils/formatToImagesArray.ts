/**
 * Internal dependencies
 */
import { Image, ApiImage } from 'types';

const formatToImagesArray = ({ data }: ApiImage, alt: string) => {
	if (!data) return;

	const images: Array<Image> = [];

	data.forEach(({ attributes: { formats } }) => {
		images.push({
			src: formats.large.url,
			alt,
		});
	});

	return images;
};

export default formatToImagesArray;
