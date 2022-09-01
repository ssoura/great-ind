import styled from 'styled-components'
import About from './components/About'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar'

const Wrapper = styled.div`
  margin-top: var(--navheight);
  position: relative;
`

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Sidebar />
    </Wrapper>
  )
}

export default App
