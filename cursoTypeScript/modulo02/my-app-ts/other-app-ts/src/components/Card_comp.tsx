import { convertToObject } from "typescript"
import React, { useState } from 'react';
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
import { Header } from "./Header/Header";
import { verification } from "../services/login";



export const CompCard = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
      verification(user, password);
  }
    return(
        <ChakraProvider>
        <Header />
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
              onChange={(e) => setUser(e.target.value)}
            />
            <br /><br />
            <Input
              placeholder='Senha'
              type='password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
           <Button
              onClick={handleClick}
              mt={'10px'}
              colorScheme='teal'
              size='md'
              type="submit">Entrar</Button>
          </Box>
          
  
        </Flex>
      </ChakraProvider>
    )
}