import './globals.css';
import Footer from '../../components/Footer';
import { Suspense } from 'react';
import Loader from '../../components/Loader';
import { getMessages } from 'next-intl/server';

import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export default async function RootLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Code Hive" />
        <title>Code Hive</title>
      </head>
      <body
        // current langauge is arabic then set dir to rtl
        // dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* <Loader> */}
        {/* <NextTopLoader showSpinner={false} /> */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {/* </Loader> */}
      </body>
    </html>
  );
}
