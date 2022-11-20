export type ApiImage = {
	data:
		| Array<{
				attributes: {
					formats: any;
				};
		  }>
		| undefined;
};
