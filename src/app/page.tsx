'use client'
// components
import { Box } from "@chakra-ui/react";
import { AboutMe, Header, HomePage } from "@/components";

export default function Home() {

  return (
    <Box>
      <Header />
      <HomePage />
      <AboutMe />
    </Box>
  );
}
