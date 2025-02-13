// components
import { Divider, Flex, IconButton } from "@chakra-ui/react";

// assets
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export function SocialMedia() {

  const socialMedias = [
    {
      ariaLabel: "Whatsapp Icon Button",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send?phone=77981378347"
    },
    {
      ariaLabel: "Linkedin Icon Button",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/paulo-henrique2020/"
    },
    {
      ariaLabel: "Github Icon Button",
      icon: <FaGithub />,
      url: "https://github.com/PauloHenriqueSousa2020"
    },
  ];

  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={2}
      position={'absolute'}
      left={4}
      bottom={0}
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