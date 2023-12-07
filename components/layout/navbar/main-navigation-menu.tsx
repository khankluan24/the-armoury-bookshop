'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { BookOpenText, CalendarDays, Coffee, GiftIcon, LibraryBig } from 'lucide-react';
import Link from 'next/link';

export default function MainNavigationMenu({
  cultureMenu,
  theologyMenu,
  kidsMenu
}: {
  cultureMenu: any;
  theologyMenu: any;
  kidsMenu: any;
}) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/search">
              <NavigationMenuTrigger className="flex gap-2">
                <LibraryBig className="my-auto h-4 w-4" /> Books
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <div className="h-50% w-screen bg-neutral-900 p-4 text-white">
                <div className="grid w-full grid-cols-3 gap-12 p-10">
                  <div className="space-y-4">
                    <h2 className="font-logo text-xl font-semibold tracking-tighter">Culture</h2>
                    <hr />
                    <ul>
                      {cultureMenu.map((item: any) => (
                        <ListItem key={item.title} title={item.title} href={item.path}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-logo text-xl font-semibold tracking-tighter">Theology</h2>
                    <hr />
                    <ul>
                      {theologyMenu.map((item: any) => (
                        <ListItem key={item.title} title={item.title} href={item.path}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-logo text-xl font-semibold tracking-tighter">Kids</h2>
                    <hr />
                    <ul>
                      {kidsMenu.map((item: any) => (
                        <ListItem key={item.title} title={item.title} href={item.path}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/our-heritage" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex gap-2`}>
                <BookOpenText className="my-auto h-4 w-4" /> Our Heritage
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/cafe" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex gap-2`}>
                <Coffee className="my-auto h-4 w-4" /> Cafe
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/events" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex gap-2`}>
                <CalendarDays className="my-auto h-4 w-4" /> Events
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/gifts" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex gap-2`}>
                <GiftIcon className="my-auto h-4 w-4" /> Gifts
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <div className="group">
        <button>hover</button>
        <div className="absolute left-0 hidden w-full group-hover:block">
          <ul className="gap-3 bg-black p-4">
            {menu.map((item: any) => (
              <p key={item.title} title={item.title}>
                {item.title}
              </p>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
