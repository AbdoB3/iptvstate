import Navbar from "@/components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: "iptvstate",
  description: "the best iptv provider",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app main-content relative ">
            <Navbar />
            {children}
            <Analytics />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
