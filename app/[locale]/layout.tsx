import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { Header } from "@components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amateur Cycling Stats",
  description: "",
};

const RootLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1"
      />
      <body className={inter.className}>
        <Header />
        <section className="max-w-[1200px] mx-auto p-2">{children}</section>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
