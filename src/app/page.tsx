'use client'
// components
import { Box } from "@chakra-ui/react";
import { AboutMe, Header, HomePage, Projects } from "@/components";

export default function Home() {

  return (
    <Box>
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
    </Box>
  );
}
