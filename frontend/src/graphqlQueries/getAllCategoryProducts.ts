const GET_ALL_CATEGORY_PRODUCTS = `
query getAllCategoryProducts($name: String!){
    categories(filters: { name: { eq: $name } }) {
    data {
      attributes {
        name
        products {
          data {
            attributes {
              title
              slug
              imagesCount
              images {
                data {
                  attributes {
                    formats
                  }
                }
              }
              price
              isPremium
              extras {
                data {
                  attributes {
                    extras
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default GET_ALL_CATEGORY_PRODUCTS;
