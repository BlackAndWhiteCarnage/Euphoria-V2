const GET_PRODUCT = `
query geProduct($slug: String!){
  products(filters: {slug: { eq: $slug }}) {
   data {
     attributes {
       title
       slug
       price
       customDescription
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

export default GET_PRODUCT;
