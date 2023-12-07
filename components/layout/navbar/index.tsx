import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { ModeToggle } from 'components/mode-toggle';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MainNavigationMenu from './main-navigation-menu';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const cultureMenu = await getMenu('culture');
  const theologyMenu = await getMenu('theology');
  const kidsMenu = await getMenu('kids');

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 bg-neutral-900 p-4 text-white  lg:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="mr-4 block flex-none md:hidden">
          <MobileMenu menu={cultureMenu} />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full gap-4 md:w-1/3">
            <div className="my-auto">
              <Link className="flex font-bold" href={'/'}>
                <Image
                  src="/logos/the-armoury-bookshop.png"
                  height="40"
                  width="40"
                  alt="The Armoury Bookshop Logo"
                  className="mr-4"
                />
                <div className="my-auto hidden hover:text-muted-foreground md:block">
                  <p className="relative my-auto whitespace-nowrap font-logo text-xl leading-none">
                    <span className="absolute -top-2.5 left-4 text-sm">The</span>
                    Armoury
                  </p>
                  <p className="ml-2 whitespace-nowrap font-logo text-xl leading-none">Bookshop</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <MainNavigationMenu
              cultureMenu={cultureMenu}
              theologyMenu={theologyMenu}
              kidsMenu={kidsMenu}
            />
          </div>
          <div className="flex justify-end gap-2 md:w-1/3">
            <div className="hidden lg:flex">
              <Search />
            </div>

            <ModeToggle />

            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
}
