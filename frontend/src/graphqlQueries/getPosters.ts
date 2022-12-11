const GET_ALL_POSTERS = `
query {
	posters {
	  data {
		attributes {
		  image
		  text
		  link
		}
	  }
	}
  }
`;

export default GET_ALL_POSTERS;
