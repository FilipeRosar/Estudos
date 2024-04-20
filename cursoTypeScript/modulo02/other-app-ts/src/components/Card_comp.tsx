import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'


export const CompCard = ({ children }: any) => {
  
  return(
        <ChakraProvider>
            <Box>
              { children }
             
            </Box>
            </ChakraProvider>
  )
}
