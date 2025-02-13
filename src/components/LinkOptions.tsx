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
    { title: t('link4'), href: "#contact" },
  ]

  return (
    <Box>
      <Box className="hidden lg:block">
        <HStack spacing={2}>
          {headerOptions.map((header, index) => (
            <Link key={index} href={header.href} mx={2}>
              <Text _hover={{
                textDecoration: 'underline',
                color: 'system-secondary'
              }}>
                {header.title}
              </Text>
            </Link>
          ))}
        </HStack>
      </Box>
      <Box className="lg:hidden">
        <IconButton colorScheme='blue' onClick={onOpen} aria-label="Hamburguer Menu Options" icon={<CiMenuBurger />} />
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={'background'} borderRadius={'2xl'}>
            <DrawerBody>
              {headerOptions.map((header, index) => (
                <Link key={index} href={header.href} mx={2}>
                  <Text _hover={{
                    textDecoration: 'underline',
                    color: 'system-secondary'
                  }}>
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