'use client'
// libs
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// components
import { Select } from "@chakra-ui/react";

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

  const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;

    setLocale(newLocale);
    document.cookie = `WEBSITE_LOCALE=${newLocale};`
    router.refresh();
  };

  return (
    <Select
      value={locale}
      onChange={handleChangeLocale}
      color={'text'}
      _focus={{
        borderColor: 'border',
        shadow: 'none',
      }}
      sx={{
        '> option': {
          background: 'background-secondary',
          color: 'text',
        },
      }}
    >
      <option value='br'>BR</option>
      <option value='en'>EN</option>
    </Select>
  )
}