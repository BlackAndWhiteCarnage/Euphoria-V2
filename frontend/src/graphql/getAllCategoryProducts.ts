export const GET_ALL_CATEGORY_PRODUCTS = `
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
              images {
                data {
                  attributes {
                    previewUrl
                  }
                }
              }
              price
              isPremium
              Extra {
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
