import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Box, CssBaseline } from "@mui/material";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Header } from "@components/common/header/header";

// FONTS 
import "@styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
      <body>
        <NuqsAdapter>
          <CssBaseline />
          <Header />
          <Box component='section' sx={{ padding: '40px' }}>{children}</Box>
        </NuqsAdapter>
      </body>
    </html >
  );
};

export default RootLayout;
