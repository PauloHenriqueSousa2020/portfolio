  // libs
  import { useTranslations } from 'next-intl';

  // components
  import { Avatar, Flex, VStack, Text, Box, Divider, Heading } from '@chakra-ui/react';

  export function AboutMe() {
    const t = useTranslations('AboutMe');

    const text = `    const profile = {
      ${t('name')}: 'Paulo Henrique Sousa Silva',
      ${t('age')}: 27,
      ${t('address')}: 'Vitória da Conquista - BA',
      ${t('role')}: 'Front-End',
    };`

    return (
      <VStack
        id={'about'}
        w={'100%'}
        minH={'100vh'}
        justifyContent={'center'}
        spacing={20}
        mb={20}
      >
        <Heading>{`<${t('header')} />`}</Heading>

        <Flex
          gap={[5, 5, 20]}
          alignItems={'center'}
          justifyContent={'center'}
          direction={['column', 'column', 'column', 'row']}
          paddingX={10}
        >
          <Flex direction={'column'} alignItems={'center'} gap={[10]}>
            <Avatar
              src='https://avatars.githubusercontent.com/u/40511257?v=4'
              w={'240px'}
              h={'240px'}
            />
            <Text as={'pre'}>{text}</Text>
          </Flex>

          <Divider display={['flex', 'none', 'none']} />

          <Box textAlign={'justify'} w={['100%', '100%', '80%', '30%']} fontSize={'lg'} >
            <Text mb={4}>
              {t('description1')}
            </Text>
            <Text mb={4}>
              {t('description2')}
            </Text>
            <Text mb={4}>
              {t('description3')}
            </Text>
          </Box>
        </Flex>
      </VStack>
    )
  }