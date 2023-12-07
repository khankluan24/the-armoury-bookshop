import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0 ? (
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-lg font-semibold">No Products Found</h1>
                <p>
                  There are no products that match the query{' '}
                  <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
              </div>
            </div>
          ) : (
            <div>
              Showing {products.length} {resultsText} for{' '}
              <span className="font-bold">&quot;{searchValue}&quot;</span>
            </div>
          )}
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
