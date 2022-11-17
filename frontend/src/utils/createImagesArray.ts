/**
 * Internal dependencies
 */
import { Image as ImageType } from 'types';

const createImagesArray = (images: any, title: string) => {
	const formattedImages: Array<ImageType> = [];

	images.data.forEach(({ attributes: { formats } }: any) => {
		formattedImages.push({
			src: formats.large ? formats.large.url : formats.medium.url,
			alt: title,
		});
	});

	return formattedImages;
};

export default createImagesArray;
