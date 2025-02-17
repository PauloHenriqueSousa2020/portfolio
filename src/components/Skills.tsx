// libs
import { useTranslations } from "next-intl";

// components
import { Box, Flex, Heading, SimpleGrid, Tooltip } from "@chakra-ui/react";

// constants
import { skills } from "@/constants/skills";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <Flex
      id={'skills'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      minH={'calc(100vh + 60px)'}
      position={'relative'}
      mb={[20, 5]}
      gap={[5, 10, 20]}
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
              padding={[3, 5, 10]}
              borderRadius={'md'}
              boxShadow={'0 0 2px 2px var(--shadow)'}
              fontSize={'6xl'}
            >
              {skill.icon}
            </Box>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Flex>
  )
}