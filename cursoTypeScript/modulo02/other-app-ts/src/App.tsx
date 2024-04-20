import {
  ChakraProvider,
} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoute from './router';
import { createLocalStorage, getAllLocalStorage } from './services/storage';


function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoute />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
