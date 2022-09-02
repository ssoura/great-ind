import styled from 'styled-components'
import About from './components/About'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar'
import ItemList from './components/ItemList'

import { ChakraProvider } from '@chakra-ui/react'

const Wrapper = styled.div`
  margin-top: var(--navheight);
  position: relative;
`

function App() {
  return (
    <ChakraProvider>
      <Wrapper>
        <Navbar />
        <Banner />
        <About />
        <Portfolio />
        <ItemList />
        <Sidebar />
      </Wrapper>
    </ChakraProvider>
  )
}

export default App
