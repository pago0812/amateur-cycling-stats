import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
        <section className="mx-auto max-w-[1200px] p-2">{children}</section>
      </body>
    </html>
  );
};

export default RootLayout;
