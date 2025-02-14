'use client'
// components
import { AboutMe, Footer, Header, HomePage, Projects, Skills } from "@/components";
import { Box } from "@chakra-ui/react";

export default function Home() {

  return (
    <Box bg={'background'}>
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </Box>
  );
}
