
import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager
  } from '@chakra-ui/react'
import theme from '../components/theme'
  
  export default function Chakra({}) {
    const colorModeManager = localStorageManager
  
    return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
       
      </ChakraProvider>
    )
  }