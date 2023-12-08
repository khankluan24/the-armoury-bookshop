import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import Price from './price';

export async function Carousel({
  collection,
  tagline,
  title
}: {
  collection: string;
  tagline: string;
  title: string;
}) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: collection });

  if (!products?.length) return null;

  return (
    <div className="flex justify-end px-4">
      <div className="scrollbar-hide overflow-x-auto py-32">
        <div className="flex gap-2">
          <div className="relative min-h-full min-w-[280px] rounded-lg bg-black">
            <div className="absolute bottom-6 left-6 right-6 space-y-4  text-white">
              <p className="font-mono text-sm uppercase">{tagline}</p>

              <p className="font-logo text-2xl font-semibold">{title}</p>
            </div>
          </div>
          {products.map((product) => (
            <div key={product.handle}>
              <Link
                className="relative flex aspect-square rounded-lg bg-[#dfcfbf] transition-all duration-200 ease-in-out dark:bg-neutral-800"
                href={`/product/${product.handle}`}
              >
                <Image
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  className=" object-contain py-4 drop-shadow-2xl"
                />
              </Link>
              <div className="w-[280px] bg-[#fffbf6] p-4 font-semibold text-black  dark:bg-black/70 dark:text-white">
                <div>
                  <Link
                    href={`/product/${product.handle}`}
                    className="mr-4 line-clamp-2 flex-grow font-logo tracking-tight underline-offset-4 hover:text-blue-600 hover:underline"
                  >
                    {product.title}
                  </Link>
                  <Link
                    href={`/search?q=${(product.author && product.author.value) || ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
