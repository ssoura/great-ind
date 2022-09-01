import styled from 'styled-components'

import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Wrapper = styled.nav`
  position: fixed;
  height: var(--navheight);
  background-color: var(--light);
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
`

function Navbar() {
  return (
    <Wrapper>
      <NavbarDesktop />
      <NavbarMobile />
    </Wrapper>
  )
}

export default Navbar
