// libs
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookiesLocale = (await cookies()).get("WEBSITE_LOCALE")?.value || "pt";
  const avaliableLocale = ['pt', 'en'];
  
  const locale = !avaliableLocale.includes(cookiesLocale) ? 'pt' : cookiesLocale;

  return {
    locale,
    messages: (await import(`messages/${locale}.json`)).default,
  }
})