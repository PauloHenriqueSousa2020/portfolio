'use client'
// components
import { AboutMe, Footer, Header, HomePage, Projects, Skills } from "@/components";
import { Flex } from "@chakra-ui/react";

export default function Home() {

  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </Flex>
  );
}
