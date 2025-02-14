// libs
import { useTranslations } from "next-intl";

// components
import { Box, Heading, SimpleGrid, Tooltip, VStack } from "@chakra-ui/react";
import { skills } from "@/constants/skills";

// constants

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <VStack
      id={'skills'}
      minH={'calc(100vh + 60px)'}
      justifyContent={'flex-start'}
      spacing={[5, 10, 20]}
      padding={[2, 20]}
    >
      <Heading
        color={'system'}
        my={[2, 4, 8]}
      >
        {`<${t('header')} />`}
      </Heading>

      <SimpleGrid columns={[3, 3, 3, 5]} spacing={10}>
        {skills.map((skill, index) => (
          <Tooltip
            key={index}
            label={skill.name}
            placement={'top'}
            border={'md'}
            bg={'system'}
            color={'white'}
          >
            <Box
              bg={'background-secondary'}
              color={'system'}
              padding={[5, 5, 10]}
              borderRadius={'md'}
              boxShadow={'0 0 2px 2px var(--shadow)'}
              fontSize={'6xl'}
            >
              {skill.icon}
            </Box>
          </Tooltip>
        ))}
      </SimpleGrid>

    </VStack>
  )
}