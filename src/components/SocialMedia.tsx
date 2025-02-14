// components
import { Divider, Flex, IconButton } from "@chakra-ui/react";

// constants
import { socialMedias } from "@/constants/socialMedias";

export function SocialMedia() {

  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={2}
      position={'fixed'}
      left={4}
      bottom={0}
      display={['none', 'none', 'flex']}
    >
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
      <Divider
        orientation="vertical"
        h={24}
        borderWidth={1}
        borderColor={'system-secondary'}
      />
    </Flex>
  )
}