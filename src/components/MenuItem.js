import React from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  gap: 2px;
  cursor: pointer;
`

function MenuItems({ menu }) {
  return <MenuItemWrapper>{menu.label}</MenuItemWrapper>
}

export default MenuItems
