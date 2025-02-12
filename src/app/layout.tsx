// libs
import type { Metadata } from "next";

// providers
import { Providers } from "./providers";

// styles
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Web Portfólio",
  description: "Portfólio web - Paulo Henrique Sousa Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
