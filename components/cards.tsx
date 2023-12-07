import Image from 'next/image';
import Link from 'next/link';

export default function Cards() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="group relative aspect-square overflow-hidden rounded-md ">
          <Image
            src="/ioann-mark-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Ioaan Mark Unsplash Book"
            className="h-full w-full rounded-md object-cover object-bottom brightness-50 transition duration-200 ease-in-out group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 right-6 space-y-4  text-white">
            <p className="font-mono text-sm uppercase">Explore New</p>
            <div className="pb-4">
              <p className="font-logo text-2xl font-semibold">Latest Arrivals</p>
              <p>Shop our latest arrivals and find the perfect book to add to your collection.</p>
            </div>
            <Link href="/search?sort=latest-desc" className="underline-offset-4 hover:underline">
              Shop Latest Arrivals
            </Link>
          </div>
        </div>
        <div className="group relative aspect-square  overflow-hidden rounded-md">
          <Image
            src="/sincerely-media-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Sincerely Media Unsplash Book"
            className="h-full w-full rounded-md object-cover brightness-50 transition duration-200 ease-in-out group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 right-6 space-y-4  text-white">
            <p className="font-mono text-sm uppercase">Pick Up</p>
            <div className="pb-4">
              <p className="font-logo text-2xl font-semibold">Featured Titles</p>
              <p>Shop the books that we are currently reading and enjoying.</p>
            </div>
            <Link href="/search/featured" className="underline-offset-4 hover:underline">
              Shop Featured Titles
            </Link>
          </div>
        </div>
        <div className="group relative aspect-square overflow-hidden rounded-md ">
          <Image
            src="/studio-media-unsplash-book.jpg"
            width={500}
            height={500}
            priority
            alt="Studio Media Unsplash Book"
            className="h-full w-full rounded-md object-cover brightness-50 transition duration-200 ease-in-out group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 right-6 space-y-4  text-white">
            <p className="font-mono text-sm uppercase">Represent</p>
            <div className="pb-4">
              <p className="font-logo text-2xl font-semibold">Merchandise</p>
              <p>Shop our merchandise and show your support for the bookstore and our authors.</p>
            </div>
            <Link href="/search/merchandise" className="underline-offset-4 hover:underline">
              Shop Merchandise
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
