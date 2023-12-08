import productFragment from './product';

const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                publisher: metafield(namespace: "custom", key: "publisher") {
                  value
                  type
                }
                published: metafield(namespace: "custom", key: "published") {
                  value
                  type
                }
                binding: metafield(namespace: "custom", key: "binding") {
                  value
                  type
                }
                isbn_13: metafield(namespace: "custom", key: "isbn_13") {
                  value
                  type
                }
                isbn_10: metafield(namespace: "custom", key: "isbn_10") {
                  value
                  type
                }
                author: metafield(namespace: "custom", key: "author") {
                  value
                  type
                }
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${productFragment}
`;

export default cartFragment;
