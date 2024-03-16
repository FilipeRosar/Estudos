import {
  Heading,
  ChakraProvider,
  Button,
  ButtonGroup,
  Input,
  Center,
  Box,
  Flex
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import styled from 'styled-components';
import { login } from './services/login';


function App() {
  return (
    <ChakraProvider>
      <Flex 
      minHeight='100vh'
      backgroundColor={'#ADEA74'}
      padding={'25px'}
      justifyContent='center'
      alignItems='baseline'
      >
        <Box 
        backgroundColor={'#EBE075'}
        borderRadius={'10px'}
        padding={'26px'}
        border={'1px solid '}
        width={'500px'}
        height={'270px'}
        maxWidth={'500px'}
        
        >
          <Center
          fontFamily={'Arial'}
          fontSize={'17px'} 
          fontWeight={'700'}
          mb={'10px'}>
            <h1>Faça o login: </h1>
          </Center>
          <Input
            placeholder='Email'
            type='email'
            required
            />
          <br /><br />
          <Input
            placeholder='Senha'
            type='password'
            required
            />
          <Button
            onClick={login} 
            mt={'10px'}
            colorScheme='teal'
            size='md'
            type="submit">Entrar</Button>
        </Box>
        

      </Flex>
    </ChakraProvider>
  );
}

export default App;
