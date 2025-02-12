'use client'
// libs
import { ChakraProvider } from '@chakra-ui/react';

// styles
import { chakraTheme } from '@/styles/ChakraTheme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      {children}
    </ChakraProvider>
  )
}