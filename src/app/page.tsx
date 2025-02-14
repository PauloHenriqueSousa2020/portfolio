'use client'
// components
import { Box } from "@chakra-ui/react";
import { AboutMe, Footer, Header, HomePage, Projects, Skills } from "@/components";

export default function Home() {

  return (
    <Box>
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </Box>
  );
}
