'use client'
// libs
import { useTranslations } from "next-intl";

// components
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure
} from "@chakra-ui/react"

// assets
import { CiMenuBurger } from "react-icons/ci";

export function LinkOptions() {
  const t = useTranslations('Header');

  const { isOpen, onOpen, onClose } = useDisclosure()

  const headerOptions = [
    { title: t('link1'), href: "#about" },
    { title: t('link2'), href: "#projects" },
    { title: t('link3'), href: "#skills" },
    { title: t('link4'), href: "#tictactoe" }
  ]

  return (
    <Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <HStack spacing={[5, 5, 10]}>
          {headerOptions.map((header, index) => (
            <Link key={index} href={header.href} mx={2}>
              <Text
                color={'system'}
                fontWeight={600}
                _hover={{
                  textDecoration: 'underline',
                  color: 'system-secondary'
                }}
              >
                {header.title}
              </Text>
            </Link>
          ))}
        </HStack>
      </Box>

      <Box display={['block', 'block', 'block', 'none']}>
        <IconButton
          aria-label="Hamburguer Menu Options"
          onClick={onOpen}
          size={'sm'}
          icon={<CiMenuBurger />}
          bgColor={'system-secondary'}
          color={'background-secondary'}
          _hover={{
            opacity: 0.8
          }}
        />
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={'background'} borderRadius={'2xl'}>
            <DrawerBody>
              {headerOptions.map((header, index) => (
                <Link key={index} href={header.href} mx={2}>
                  <Text
                    color={'system'}
                    fontWeight={600}
                    _hover={{
                      textDecoration: 'underline',
                      color: 'system-secondary'
                    }}
                  >
                    {header.title}
                  </Text>
                </Link>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}
