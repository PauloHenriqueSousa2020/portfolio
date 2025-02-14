// libs
import { useTranslations } from "next-intl";

// components
import { Flex, IconButton, Text } from "@chakra-ui/react";

// constants
import { socialMedias } from "@/constants/socialMedias";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <Flex
      w={'100%'}
      align={'center'}
      justifyContent={'center'}
      bg={'background-secondary'}
      direction={'column'}
      p={4}
    >
      <Flex gap={8} mb={4}>
        {socialMedias.map((socialMedia, index) => (
          <IconButton
            key={index}
            as="a"
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialMedia.ariaLabel}
            icon={socialMedia.icon}
            bgColor={"transparent"}
            borderColor={"system-secondary"}
            borderWidth={1}
            color={"system-secondary"}
            borderRadius={"full"}
            _hover={{
              bg: "system-secondary",
              color: "system",
            }}
            size={"lg"}
            mt={2}
          />
        ))}
      </Flex>
      <Text
        color={'system'}
        fontWeight={600}
      >
        {t("text")}
      </Text>
    </Flex>
  )
}