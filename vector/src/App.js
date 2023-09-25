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
import  ColorModeSwitcher  from './ColorModeSwitcher';
import Home from './components/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Home/>
    </ChakraProvider>
  );
}

export default App;
