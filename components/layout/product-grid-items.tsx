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
            className="relative flex h-full w-full rounded-lg bg-[#dfcfbf] dark:bg-neutral-800"
            href={`/product/${product.handle}`}
          >
            <Image
              alt={product.title}
              src={product.featuredImage?.url}
              fill
              className="h-full w-full object-contain py-4 drop-shadow-2xl"
            />
          </Link>
          <div className="h-max w-full  bg-[#fffbf6] p-4 font-semibold text-black dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <div>
              <Link
                href={`/product/${product.handle}`}
                className="mr-4 line-clamp-2 flex-grow font-logo tracking-tight underline-offset-4 hover:text-blue-600 hover:underline"
              >
                {product.title}
              </Link>
              <Link
                href={`/search?q=${
                  ((product.author && product.author.value) || '')
                    .toLowerCase()
                    .replace(/\s+/g, '-') || ''
                }`}
                className="text-xs font-normal underline-offset-4 hover:text-blue-600 hover:underline"
              >
                {(product.author && product.author.value) || ''}
              </Link>
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
