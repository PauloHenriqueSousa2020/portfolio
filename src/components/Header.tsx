// components
import { Box, Flex, Spacer, Link, Text, HStack } from '@chakra-ui/react';
import { LanguageSelector, LinkOptions, ThemeSwitch } from '@/components';

export function Header() {
  return (
    <Box position={'fixed'} w={'100%'} p={4} mt={-1} bg={'background-secondary'} zIndex={10}>
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
          <LanguageSelector />
          <ThemeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};