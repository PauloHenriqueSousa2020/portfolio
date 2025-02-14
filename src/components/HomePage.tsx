// libs
import { useTranslations } from "next-intl";

// components
import { Box, Button, Code, Flex, Heading, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// assets
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SocialMedia } from "./SocialMedia";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const jump = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-20px); }
`;

export function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <Flex
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      minH={'calc(100vh + 60px)'}
      position={'relative'}
    >
      <SocialMedia />
      <VStack spacing={10}>
        <Code
          bg={'system-secondary'}
          p={2}
          fontSize={'md'}
          color={'background'}
        >
          Hello world!
        </Code>

        <Heading
          animation={`${pulse} 4s infinite`}
          color={'system'}
        >
          {'<PauloHenrique />'}
        </Heading>

        <Heading
          size={'sm'}
          background={'system-secondary'}
          color={'background-secondary'}
          p={4}
          boxShadow="0 0 8px 2px var(--shadow)"
          w={'240px'}
          textAlign={'center'}
          borderRadius={'md'}
        >
          {t('role')}
        </Heading>

        <Button
          variant={'outline'}
          color={'system-secondary'}
          borderColor={'system-secondary'}
          opacity={0.8}
          _hover={{
            opacity: 1
          }}
          size={'lg'}
          as={'a'}
          href={t('curriculum')}
          target="_blank"
        >
          Download CV
        </Button>
      </VStack>

      <Box
        position="absolute"
        bottom={14}
        left="50%"
        animation={`${jump} 2s infinite`}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MdKeyboardDoubleArrowDown size={50} color="var(--system-secondary)" />
      </Box>
    </Flex>
  )
}