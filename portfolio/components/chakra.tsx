
import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager
  } from '@chakra-ui/react'
import theme from '../components/theme'
  
export default function Chakra({ cookies, children }: any) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}