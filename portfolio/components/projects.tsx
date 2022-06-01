import { ReactNode } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Avatar,
  Stack,
  Link,
  Button,
  Menu,
  Center,
  Image,
  Container,
  Grid,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxWidth={"full"} p={0} id="projects" pt={{base:'100px', md:'10px', lg:'10px'}}>
      <Flex
        h="100vh"
        py={[0, 10, 20]}
        pt={{ base: "20px" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w="full" h="full" alignItems={"center"} p={2} pt={{base:'30px'}}>
          <Heading>Devin Carter.</Heading>
          <Heading>Software Engineer.</Heading>
          <Text>Web3 Full stack Creator</Text>
          <Image
            w={{ base: "200px", md: "280px", lg: "300px" }}
            h={{ base: "240px", md: "350px", lg: "380px" }}
            borderRadius='full'
            src="images/FFC04917-5D22-40B0-A793-26E06484DEB4_1_105_c.jpeg"
            alt="Picture of me"
          />
        </VStack>
        </Flex>
        </Container>
  );
};

export default Projects;
