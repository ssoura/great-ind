import React from 'react'
import styled from 'styled-components'
import { BiCube } from 'react-icons/bi'
import { FiFeather, FiCommand, FiThumbsUp } from 'react-icons/fi'

const MenuWrapper = styled.div`
  padding: 20px;
  max-width: 500px;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuList = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const MenuItemWrapper = styled.div`
  background-color: var(--maroon);
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

const Heading = styled.h3`
  color: var(--accent-maroon);
  font-size: 20px;
  margin-top: 10px;
`

const Icon = styled.div`
  & > * {
    width: 40px;
    height: 40px;
    color: var(--light-maroon);
  }
`

const P = styled.p`
  color: var(--light-maroon);
  margin-top: 10px;
`

function MenuItem({ title, description, children }) {
  return (
    <MenuItemWrapper>
      <Icon>{children}</Icon>
      <Heading>{title}</Heading>
      <P className="notes">{description}</P>
    </MenuItemWrapper>
  )
}

function MenuSection() {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem
          title="Design"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <BiCube />
        </MenuItem>
        <MenuItem
          title="Develop"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiCommand />
        </MenuItem>
        <MenuItem
          title="Write"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiFeather />
        </MenuItem>
        <MenuItem
          title="Promote"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiThumbsUp />
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}

export default MenuSection
