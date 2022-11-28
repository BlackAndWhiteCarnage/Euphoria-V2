const GET_PRODUCTS_BY_ARRAY_OF_SLUGS = `
query getProductsByArrayOfSlugs($slugs: [String]!){
	products(filters: {slug: { in: $slugs }}) {
	 data {
	   attributes {
		 title
		 slug
		 price
		 category {
			data {
				attributes {
					name
				}
			}
		 }
		 description {
		  data {
			attributes {
			  description
			}
		  }
		}
		 extras {
		   data {
			 attributes {
			   extras
			 }
		   }
		 }
		 isPremium
		 imagesCount
		 images {
		   data {
			 attributes {
			   formats
			 }
		   }
		 }
	   }
	 }
   }
  }
`;

export default GET_PRODUCTS_BY_ARRAY_OF_SLUGS;
