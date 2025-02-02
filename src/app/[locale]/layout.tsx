import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "src/components/common/header/header";
import { GlobalAlert } from "src/components/common/global-alert/global-alert";
import { routing } from "src/i18n/routing";

// FONTS
import theme from "src/styles/theme";
import "@styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "Amateur Cycling Stats",
  description: "",
};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) => {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1"
      />
      <body>
        <NextIntlClientProvider messages={messages}>
          <NuqsAdapter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              <Box>{children}</Box>
            </ThemeProvider>
          </NuqsAdapter>
          <GlobalAlert />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
