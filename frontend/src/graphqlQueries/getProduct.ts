const GET_PRODUCT = `
query getAllCategoryProducts($slug: String!){
  products(filters: {slug: { eq: $slug }}) {
   data {
     attributes {
       title
       slug
       price
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
