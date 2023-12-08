import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 font-logo text-5xl font-semibold tracking-tighter">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <div className="mb-6 text-sm leading-tight dark:text-white/[60%]">
        {product.publisher && product.publisher.value ? (
          <p>Publisher: {product.publisher.value}</p>
        ) : null}
        {product.published && product.published.value ? (
          <p>Published: {product.published.value}</p>
        ) : null}
        {product.binding && product.binding.value ? <p>Binding: {product.binding.value}</p> : null}
        {product.isbn_13 && product.isbn_13.value ? <p>ISBN-13: {product.isbn_13.value}</p> : null}
        {product.isbn_10 && product.isbn_10.value ? <p>ISBN-10: {product.isbn_10.value}</p> : null}
        {product.author && product.author.value ? <p>Author: {product.author.value}</p> : null}
      </div>

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
