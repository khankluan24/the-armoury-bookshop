import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroCarousel from 'components/hero-carousel';
import Footer from 'components/layout/footer';
import Image from 'next/image';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <HeroCarousel />

      <div className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
          <div className="aspect-square rounded-md">
            <Image
              src="/ioann-mark-unsplash-book.jpg"
              width={500}
              height={500}
              alt="Ioaan Mark Unsplash Book"
              className="h-full w-full rounded-md object-cover object-bottom brightness-50"
            />
          </div>
          <div className="aspect-square rounded-md">
            <Image
              src="/sincerely-media-unsplash-book.jpg"
              width={500}
              height={500}
              alt="Sincerely Media Unsplash Book"
              className="h-full w-full rounded-md object-cover brightness-50"
            />
          </div>
          <div className="aspect-square rounded-md">
            <Image
              src="/studio-media-unsplash-book.jpg"
              width={500}
              height={500}
              alt="Studio Media Unsplash Book"
              className="h-full w-full rounded-md object-cover brightness-50"
            />
          </div>
        </div>
      </div>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
