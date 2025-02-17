// components
import { Badge, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

// assets
import { FaGithub, FaLink } from "react-icons/fa";

interface ItemProps {
  title: string;
  repository: string;
  src: string;
  demo: string;
  description: string;
  skills: string[];
}

interface CarouselItemProps {
  item: ItemProps;
}

export function CarouselItem({ item }: CarouselItemProps) {
  return (
    <Flex
      borderRadius={'lg'}
      minH={['320px', '480px']}
      bg={'background-secondary'}
      boxShadow={'0 0 8px 2px var(--shadow)'}
      direction={'column'}
      pb={4}
    >
      <Image
        src={item.src}
        alt={item.title}
        w={'full'}
        minH={'176px'}
        maxH={'176px'}
        borderTopRadius={'lg'}
        objectFit={'cover'}
      />
      <Divider />
      <Flex
        w={'100%'}
        paddingX={4}
        paddingY={2}
        flex={1}
        direction={'column'}
      >
        <Text color={'system'} fontWeight={600} fontSize={'lg'}>
          {item.title}
        </Text>

        <Flex alignItems={'center'} gap={5}>
          <Button
            leftIcon={<FaGithub />}
            variant={'ghost'}
            as="a"
            href={item.repository}
            target="_blank"
            color={'text-secondary'}
            width={'fit-content'}
            padding={0}
            fontSize={'sm'}
            _focus={{
              bg: '!transparent'
            }}
            _hover={{
              opacity: 0.8,
              textDecoration: 'underline'
            }}
          >
            Repositório
          </Button>
          {!!item.demo && (
            <Button
              leftIcon={<FaLink />}
              variant={'ghost'}
              as="a"
              href={item.demo}
              target="_blank"
              color={'text-secondary'}
              width={'fit-content'}
              padding={0}
              fontSize={'sm'}
              _focus={{
                bg: '!transparent'
              }}
              _hover={{
                opacity: 0.8,
                textDecoration: 'underline'
              }}
            >
              Demo
            </Button>
          )}
        </Flex>

        <Text textAlign={'justify'} fontSize={'sm'} mt={2} mb={8}>
          {item.description}
        </Text>

        <Flex
          wrap={'wrap'}
          alignItems={'flex-end'}
          gap={2}
          mt={'auto'}
        >
          {item.skills.map((skill, index) => (
            <Badge
              key={index}
              borderRadius={'2xl'}
              paddingX={3}
              background={'transparent'}
              color={'system'}
              borderWidth={1}
              borderColor={'system'}
            >
              {skill}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}