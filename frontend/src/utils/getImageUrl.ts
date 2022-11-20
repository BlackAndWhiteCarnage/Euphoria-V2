/**
 * Internal dependencies
 */
import { ApiImage } from 'types';

const getImageUrl = ({ data }: ApiImage) => {
	if (!data) return;

	const {
		formats: { small, medium, large },
	} = data[0].attributes;

	return large ? large.url : medium ? medium.url : small.url;
};

export default getImageUrl;
