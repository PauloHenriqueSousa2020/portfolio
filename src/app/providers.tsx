'use client'
// libs
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';

// styles
import { chakraTheme } from '@/styles/ChakraTheme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      <NextTopLoader 
        color={'var(--system)'}
        easing={'ease'}
        zIndex={999}
        height={3}
        initialPosition={0.08}
        crawlSpeed={200}
        speed={200}
        crawl={false}
        showSpinner={false}
        showAtBottom={false}
      />
      <ChakraProvider theme={chakraTheme}>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  )
}