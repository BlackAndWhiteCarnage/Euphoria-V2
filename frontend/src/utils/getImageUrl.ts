const getImageUrl = ({ data }: any) => {
	const {
		formats: { small, medium, large },
	} = data[0].attributes;

	return large ? large.url : medium ? medium.url : small.url;
};

export default getImageUrl;
