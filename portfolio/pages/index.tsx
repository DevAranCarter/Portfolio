import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLink from '../components/navbar'
import { ChakraProvider } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <NavLink/>
    </ChakraProvider>
  )
}

export default Home
