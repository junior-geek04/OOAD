import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Navbar/>
      <Hero/>
      <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
