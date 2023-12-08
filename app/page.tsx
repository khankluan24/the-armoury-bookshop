import Cards from '@/components/cards';
import { Carousel } from '@/components/carousel';
import InfoSection from '@/components/info-section';
import HeroCarousel from 'components/hero-carousel';
import Footer from 'components/layout/footer';
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
      <div className="w-full bg-[#bf1a2a] p-3 drop-shadow-4xl" />

      <Cards />
      {/* <ThreeItemGrid /> */}
      {/* <VideoSection /> */}
      <Suspense>
        <Carousel
          collection="hidden-homepage-carousel"
          tagline="New Collection"
          title="Hudson Taylor Collection"
        />

        <InfoSection />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
