// libs
import { useTranslations } from 'next-intl';

// components
import { Avatar, Flex, Text, Box, Divider, Heading } from '@chakra-ui/react';

export function AboutMe() {
  const t = useTranslations('AboutMe');

  const text = `    const profile = {
      ${t('name')}: 'Paulo Henrique Sousa Silva',
      ${t('age')}: 27,
      ${t('address')}: 'Vitória da Conquista - BA',
      ${t('role')}: 'Front-End',
    };`

  return (
    <Flex
      id={'about'}
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

      <Flex
        gap={[5, 5, 20]}
        alignItems={'center'}
        justifyContent={'center'}
        direction={['column', 'column', 'column', 'row']}
        paddingX={10}
      >
        <Box>
          <Avatar
            src='https://avatars.githubusercontent.com/u/40511257?v=4'
            w={['120px', '240px']}
            h={['120px', '240px']}
          />
          <Text display={['none', 'flex', 'flex']} as={'pre'} mt={10}>{text}</Text>
        </Box>

        <Divider display={['flex', 'none', 'none']} />

        <Box textAlign={'justify'} w={['90%', '90%', '80%', '30%']} fontSize={['md', 'lg', 'lg']} >
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
    </Flex>
  )
}