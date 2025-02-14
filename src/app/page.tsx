'use client'
// components
import { AboutMe, Footer, Header, HomePage, Projects, Skills } from "@/components";

export default function Home() {

  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
