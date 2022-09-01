import React from 'react'
import styled from 'styled-components'
import { BsChatLeft, BsFileEarmarkText } from 'react-icons/bs'
import { FiShoppingCart, FiUsers, FiVideo } from 'react-icons/fi'
import { TbLifebuoy } from 'react-icons/tb'

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 50px;
  border-radius: 8px 0 0 8px;
  background-color: var(--light);
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  & > * {
    height: 35px;
    padding: 10px;
    width: 35px;
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    &:hover {
      color: var(--pop-green);
    }
  }

  & > *:last-child {
    border-bottom: none;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

function Sidebar() {
  return (
    <Wrapper>
      <BsChatLeft />
      <TbLifebuoy />
      <BsFileEarmarkText />
      <FiVideo />
      <FiUsers />
      <FiShoppingCart />
    </Wrapper>
  )
}

export default Sidebar
