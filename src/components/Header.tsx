// components
import { Box, Flex, Spacer, Link, Text, HStack } from '@chakra-ui/react';
import { LanguageSelector, LinkOptions, ThemeSwitch } from '@/components';

export function Header() {
  return (
    <Box
      position={'fixed'}
      w={'100%'}
      bg={'background-secondary'}
      p={4}
      zIndex={10}
    >
      <Flex align={'center'}>
        <Link href={'#'} mx={2}>
          <Text
            fontSize={['sm', 'md', 'lg']}
            color={'system-secondary'}
            fontWeight={600}
            _hover={{
              textDecoration: 'underline'
            }}
          >
            @PauloHenriqueSousa2020
          </Text>
        </Link>
        <Spacer />
        <HStack spacing={[4, 6, 8]}>
          <LinkOptions />
          <ThemeSwitch />
          <LanguageSelector />
        </HStack>
      </Flex>
    </Box>
  );
};