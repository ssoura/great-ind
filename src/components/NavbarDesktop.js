import React from 'react'
import styled from 'styled-components'

import Logo from '../assets/img/logo3.png'

import { Image } from '@chakra-ui/react'

const MENU = [
  {
    label: 'Home',
  },
  {
    label: 'Reviews',
  },
  {
    label: 'Our Menu',
  },
  {
    label: 'Contact Us',
  },
  {
    label: 'About Us',
  },
]

const Wrapper = styled.div`
  position: relative;
  display: none;
  height: 100%;

  @media (min-width: 1000px) {
    display: block;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--mobilewidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  gap: 15px;
`

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-size: 1rem;
`
const LeftWrapper = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 15px;

  & > * {
    cursor: pointer;
  }
`
const RightWrapper = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 15px;

  & > * {
    cursor: pointer;
  }
`

const Search = styled.input`
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
`

function MenuItem({ menu }) {
  return <MenuItemWrapper>{menu.label}</MenuItemWrapper>
}

function NavbarDesktop() {
  return (
    <Wrapper>
      <Content>
        <LeftWrapper>
          <Image height="50px" objectFit="cover" src={Logo} alt="logo" />
        </LeftWrapper>

        <Menu>
          {MENU.map((menu) => (
            <MenuItem key={menu.label} menu={menu} />
          ))}
        </Menu>
        <RightWrapper></RightWrapper>
      </Content>
    </Wrapper>
  )
}

export default NavbarDesktop
