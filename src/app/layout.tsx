// libs
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// providers
import { Providers } from "./providers";

// styles
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Paulo Henrique Sousa",
  description: "Portfólio Web - Paulo Henrique Sousa Silva",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
