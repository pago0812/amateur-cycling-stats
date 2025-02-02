import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  return {
    locale,
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});
