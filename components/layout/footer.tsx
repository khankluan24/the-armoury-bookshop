import Link from 'next/link';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-neutral-900 text-sm text-muted-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 border-t border-muted px-6 py-12  text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className="gap-12 space-y-8 md:flex md:space-y-0">
          <Link className="gap-2 text-white hover:text-muted-foreground md:pt-1" href="/">
            <div>
              <Link className="flex font-bold" href={'/'}>
                <Image
                  src="/logos/the-armoury-bookshop.png"
                  height="40"
                  width="40"
                  alt="The Armoury Bookshop Logo"
                  className="mr-4"
                />
                <div className="my-auto hover:text-muted-foreground">
                  <p className="relative my-auto whitespace-nowrap font-logo text-xl leading-none">
                    <span className="absolute -top-2.5 left-4 text-sm">The</span>
                    Armoury
                  </p>
                  <p className="ml-2 whitespace-nowrap font-logo text-xl leading-none">Bookshop</p>
                </div>
              </Link>
            </div>
          </Link>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-4">
              <a
                href="https://x.com/thearmourybookshop"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white"
              >
                <FaXTwitter className="my-auto h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/thearmourybookshop"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white"
              >
                <FaFacebook className="my-auto h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/thearmourybookshop/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white"
              >
                <FaInstagram className="my-auto h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@TheArmouryBookshop"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white"
              >
                <FaYoutube className="my-auto h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-muted py-6 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <p className="md:ml-auto">
            Part of{' '}
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer font-medium underline-offset-4 hover:text-white hover:underline">
                61 Oaks Group
              </HoverCardTrigger>
              <HoverCardContent className="text-left">
                <div className="space-y-1">
                  <p className="text-sm">
                    A collection of initiatives, projects and business that are aimed at reforming
                    their sectors to build up ruins, raise up former devastations, repair ruined
                    cities and provide discipleship for the future generation of leaders.
                  </p>
                  <div className="flex items-center pt-2">
                    <a
                      href="https://61oaksgroup.com.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex text-xs text-muted-foreground hover:text-accent-foreground"
                    >
                      Website <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        </div>
      </div>
    </footer>
  );
}
