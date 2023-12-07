import Grid from 'components/grid';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import Price from '../price';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle}>
          <Link
            className="group relative flex h-full w-full rounded-lg bg-[#dfcfbf] dark:bg-neutral-800"
            href={`/product/${product.handle}`}
          >
            <Image
              alt={product.title}
              src={product.featuredImage?.url}
              fill
              className="group:hover:drop-shadow-3xl h-full w-full object-contain py-4 drop-shadow-2xl transition-all duration-200"
            />
          </Link>
          <div className="h-max w-full space-y-1 bg-[#fffbf6] p-4 font-semibold text-black dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <div>
              <h3 className="mr-4 line-clamp-2 flex-grow font-logo leading-none tracking-tight">
                {product.title}
              </h3>
              <p className="text-xs font-normal">
                {(product.author && product.author.value) || ''}
              </p>
            </div>
            <Price
              className="flex-none text-sm"
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              currencyCodeClassName="inline"
            />
          </div>
        </Grid.Item>
      ))}
    </>
  );
}
