'use client'
// components
import { VStack } from "@chakra-ui/react";
import { AboutMe, Footer, Header, HomePage, Projects, Skills } from "@/components";

export default function Home() {

  return (
    <VStack>
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </VStack>
  );
}
