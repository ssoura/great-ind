import React from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const MENU = [
  {
    label: 'Demos',
  },
  {
    label: 'Pages',
  },
  {
    label: 'Portfolio',
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
  gap: 2px;
  cursor: pointer;
  font-size: 12px;
`

const RightWrapper = styled.div`
  position: absolute;
  right: 20px;
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
  return (
    <MenuItemWrapper>
      {menu.label}
      <FaChevronDown style={{ height: '8px', marginTop: '3px' }} />
    </MenuItemWrapper>
  )
}

function NavbarDesktop() {
  return (
    <Wrapper>
      <Content>
        <Menu>
          {MENU.map((menu) => (
            <MenuItem key={menu.label} menu={menu} />
          ))}
        </Menu>
        <RightWrapper>
          <AiOutlineShoppingCart style={{ color: 'var(--grey)' }} />
          <FiSearch style={{ color: 'var(--grey)' }} />
          <Search />
        </RightWrapper>
      </Content>
    </Wrapper>
  )
}

export default NavbarDesktop
