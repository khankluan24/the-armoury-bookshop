'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function HeroCarousel() {
  return (
    <Splide
      options={{
        type: 'loop',
        rewind: true,
        autoplay: true,
        interval: 7000,
        arrows: false,
        height: '55vh'
      }}
      aria-label="Slider"
    >
      <SplideSlide>
        <div className="w-full">
          <Image
            src="/rita-burza-unsplash-hero.jpg"
            height={2000}
            width={2000}
            quality={100}
            priority
            alt="Background Image"
            className="h-[55vh] w-full border-b-2 object-cover object-top brightness-75"
          />
          <div className="mx-auto max-w-7xl">
            <h1></h1>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="w-full">
          <Image
            src="/nik-shuliahin-unsplash-armour.jpg"
            height={2000}
            width={2000}
            quality={100}
            priority
            alt="Background Image"
            className="h-[55vh] w-full border-b-2 object-cover object-top brightness-75"
          />
          <div className="mx-auto max-w-7xl">
            <h1></h1>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="w-full">
          <Image
            src="/inaki-del-olmo-unsplash-bookshelf.jpg"
            height={2000}
            width={2000}
            quality={100}
            priority
            alt="Background Image"
            className="h-[55vh] w-full border-b-2 object-cover object-top brightness-75"
          />
          <div className="mx-auto max-w-7xl">
            <h1></h1>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
