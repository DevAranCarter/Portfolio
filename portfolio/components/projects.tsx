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
  LinkBox,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container id="projects" pt={{ base: "600px", md: "10px", lg: "10px" }}>
      <Center>
        <Heading>Projects</Heading>
      </Center>
      <Flex
        h="100vh"
        py={[0, 10, 20]}
        pt={{ base: "20px" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          w="full"
          h="full"
          alignItems={"flex-start"}
          p={2}
          pt={{ base: "30px" }}
        >
          <Heading>Web3 Website</Heading>
        </VStack>
        <VStack
          w="full"
          h="full"
          alignItems={"center"}
          p={2}
          pt={{ base: "30px" }}
        >
          <Heading>Project 2</Heading>
        </VStack>
        <VStack
          w="full"
          h="full"
          alignItems={"flex-end"}
          p={2}
          pt={{ base: "30px" }}
        >
          <Heading>Project 3</Heading>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Projects;
