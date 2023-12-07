import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Grid from '@/components/grid';
import Price from '@/components/price';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image as ShopifyImage } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4 py-10">
        <div className="flex flex-col space-y-8 rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8 lg:space-y-0">
          <div className="h-full w-full basis-full lg:basis-3/6">
            <Gallery
              images={product.images.map((image: ShopifyImage) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="basis-full lg:basis-3/6 ">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 font-logo text-2xl font-bold">You might also like...</h2>
      <Grid className="grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((product) => (
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
      </Grid>
    </div>
  );
}
