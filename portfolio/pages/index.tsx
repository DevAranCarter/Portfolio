import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, Container, Box, color } from "@chakra-ui/react";
import theme from "../components/theme";

const Home: NextPage = () => {
  return (
        <Box maxHeight={"full"} maxWidth={"full"} >
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Nav />
        <Container bg={'#f0e7db'} maxHeight={"full"} maxWidth={"full"}>
      <About />
      <Projects />
      <Contact />
      </Container>
      <Footer />
      </Box >
  );
};

export default Home;
