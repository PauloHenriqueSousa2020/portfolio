// libs
import { useTranslations } from 'next-intl';

// components
import { Box, Flex, Spacer, Link, Text, HStack } from '@chakra-ui/react';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const t = useTranslations('Header');

  return (
    <Box w={'100%'} p={4}>
      <Flex align={'center'}>
        <Link href={'#'} mx={2}>
          <Text>
            @PauloHenriqueSousa2020
          </Text>
        </Link>
        <Spacer />
        <HStack spacing={10}>
          <Link href={'#about'} mx={2}>
            <Text>
              {t('link1')}
            </Text>
          </Link>
          <Link href={'#projects'} mx={2}>
            <Text>
              {t('link2')}
            </Text>
          </Link>
          <Link href={'#skills'} mx={2}>
            <Text>
              {t('link3')}
            </Text>
          </Link>
          <Link href={'#contact'} mx={2}>
            <Text>
              {t('link4')}
            </Text>
          </Link>
          <LanguageSelector />
        </HStack>
      </Flex>
    </Box>
  );
};