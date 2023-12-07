import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
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
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
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
      author: metafield(namespace: "custom", key: "Author") {
        value
        type
      }
      ...product
    }
  }
  ${productFragment}
`;
