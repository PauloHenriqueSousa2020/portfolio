'use client'
// libs
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// components
import { IconButton } from "@chakra-ui/react";

// assets
import { BR_Flag, US_Flag } from '@/assets';

export function LanguageSelector() {
  const [locale, setLocale] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie.split("; ").find((row) => row.startsWith("WEBSITE_LOCALE="))?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `WEBSITE_LOCALE=${browserLocale};`
      router.refresh();
    }
  }, [router]);

  const handleChangeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `WEBSITE_LOCALE=${newLocale};`
    router.refresh();
  };

  return (
    <IconButton
      aria-label={"Button to change language selector"}
      onClick={() => handleChangeLocale(locale === 'pt' ? 'en' : 'pt')}
      icon={locale === 'pt' ? <US_Flag /> : <BR_Flag />}
      bgColor={'system'}
      borderRadius={'full'}
      _hover={{
        bg: 'system-secondary',
        color: 'system'
      }}
      size={'sm'}
    />
  )
}