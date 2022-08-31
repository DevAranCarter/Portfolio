import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
  } from '@chakra-ui/react';
  import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', '#f4ede4')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg='#f4ede4'
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Image src="../images/goldenboi.png" borderRadius="full" boxSize="60px"/>
          <Stack direction={'row'} spacing={6}
          textColor={"blackAlpha.900"} >
            <Link href={'/#about'} color='black' >About Me</Link>
            <Link href={'/#work'} color='black'>Work</Link>
            <Link href={'/#contact'} color='black'>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            
            <Text textColor={"blackAlpha.900"}>© 2022 Devin Carter Portfolio. All rights reserved</Text>
            <Stack direction={'row'} spacing={6} color='black' backgroundColor={'grey.700'}>
              <SocialButton label={'Linkdeln'} href={'https://www.linkedin.com/in/devin-carter2/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'GitHub'} href={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}>
                <FaGithub/>
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }