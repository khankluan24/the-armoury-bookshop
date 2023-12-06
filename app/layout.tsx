import Navbar from 'components/layout/navbar';
import Oaks from 'components/oaks';
import { ThemeProvider } from 'components/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from 'lib/utils';
import { Donegal_One } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const fontLogo = Donegal_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo'
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${fontLogo.variable} min-h-screen bg-white font-sans text-black antialiased transition-all duration-200 selection:bg-black selection:text-white dark:bg-neutral-900 dark:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Oaks />
          {/* <Notice /> */}
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
