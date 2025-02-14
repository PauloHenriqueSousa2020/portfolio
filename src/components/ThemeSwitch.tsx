'use client'
// libs
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// components
import { IconButton } from "@chakra-ui/react"

// assets
import { IoMoon, IoSunny } from 'react-icons/io5';

export function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <IconButton
      aria-label="Theme Switch Button"
      icon={<IoSunny size={16} />}
      bgColor={'system-secondary'}
      color={'background-secondary'}
      borderRadius={'full'}
      _hover={{
        bg: 'system',
        color: 'background'
      }}
      size={'sm'}
    />
  )

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  const handleThemeSwitch = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    currentTheme === "light" ? setTheme('dark') : setTheme('light');
  }

  return (
    <IconButton
      aria-label="Theme Switch Button"
      onClick={handleThemeSwitch}
      icon={currentTheme === "light" ? <IoMoon size={16} /> : <IoSunny size={16} />}
      bgColor={'system-secondary'}
      color={'background-secondary'}
      borderRadius={'full'}
      _hover={{
        bg: 'system',
        color: 'background'
      }}
      size={'sm'}
    />
  )
}