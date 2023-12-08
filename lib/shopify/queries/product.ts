import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
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
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
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
          isbn_13: metafield(namespace: "custom", key: "ISBN-13") {
            value
            type
          }
          isbn_10: metafield(namespace: "custom", key: "ISBN-10") {
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
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
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
  ${productFragment}
`;
