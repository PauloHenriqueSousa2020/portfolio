import { VStack, Heading } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Carousel from "./Carousel";

export function Projects() {
  const t = useTranslations("Projects");
  return (
    <VStack
      id={'projects'}
      w={'100%'}
      minH={'100vh'}
      justifyContent={'flex-start'}
      spacing={20}
      mb={8}
      padding={[2, 20]}
    >
      <Heading my={8}>{`<${t('header')} />`}</Heading>

      <Carousel />
    </VStack>
  );
}