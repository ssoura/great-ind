import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BsChatLeft, BsFileEarmarkText } from 'react-icons/bs'
import { FiShoppingCart, FiUsers, FiVideo } from 'react-icons/fi'
import { TbLifebuoy } from 'react-icons/tb'
import MenuItem from './MenuItem'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 1000px) {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding: 0 20px;
`

const SidebarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;

  & > * {
    height: 20px;
    width: 40px;
    &:hover {
      color: var(--pop-green);
    }
  }
`

const MenuWrapper = styled.div`
  width: 200px;
  background-color: var(--light);
  border-radius: 10px;
  position: absolute;
  top: calc(var(--navheight) + 10px);
  right: 10px;
  transform: translateY(${(props) => (props.open ? '0' : '-50vh')});
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;
`

function Menu({ open }) {
  return (
    <MenuWrapper open={open}>
      <MenuItem menu={{ label: 'Demos' }} />
      <MenuItem menu={{ label: 'Pages' }} />
      <MenuItem menu={{ label: 'Portfolio' }} />
      <SidebarList>
        <BsChatLeft />
        <TbLifebuoy />
        <BsFileEarmarkText />
        <FiVideo />
        <FiUsers />
        <FiShoppingCart />
      </SidebarList>
    </MenuWrapper>
  )
}

function NavbarMobile() {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Content>
        <AiOutlineShoppingCart />
        <FiSearch />
        <FiMenu onClick={() => setOpen((prev) => !prev)} />
        <Menu open={open} />
      </Content>
    </Wrapper>
  )
}

export default NavbarMobile
