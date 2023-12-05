import Link from 'next/link';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { ArrowUpRight } from 'lucide-react';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
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
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <p className="md:ml-auto">
            Part of{' '}
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer font-medium underline-offset-4 hover:underline">
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
