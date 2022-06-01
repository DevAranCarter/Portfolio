import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/navbar'
import About from '../components/about'
import Projects from '../components/projects'
import { ChakraProvider, Container, Box, color } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container bg='#f0e7db' maxHeight={'full'} maxWidth='full'>
          <Container maxWidth={'full'} bg='#f4ede4' position={'fixed'}> 
            <Nav/>
            </Container>
            <About/>
            <Projects/>

      </Container>
  )
}

export default Home
