import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "@components/common/header/header";
import { GlobalAlert } from "@components/common/global-alert/global-alert";

// FONTS
import theme from "@styles/theme";
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
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  const locale = useLocale();

  const messages = await getMessages();

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
        <NextIntlClientProvider messages={messages}>
          <NuqsAdapter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              <Box
                component="section"
                sx={{
                  paddingX: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
                  paddingY: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
                }}
              >
                {children}
              </Box>
            </ThemeProvider>
          </NuqsAdapter>
          <GlobalAlert />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
