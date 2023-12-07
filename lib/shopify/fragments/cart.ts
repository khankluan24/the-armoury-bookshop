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
                publisher: metafield(namespace: "custom", key: "Publisher") {
                  value
                  type
                }
                published: metafield(namespace: "custom", key: "Published") {
                  value
                  type
                }
                binding: metafield(namespace: "custom", key: "Binding") {
                  value
                  type
                }
                isbn: metafield(namespace: "facts", key: "ISBN") {
                  value
                  type
                }
                author: metafield(namespace: "custom", key: "Author") {
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
