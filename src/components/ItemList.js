import React from 'react'
import styled from 'styled-components'
import { MdDeliveryDining, MdFastfood } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'

const MenuWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  max-width: 100%;
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
  background-color: #eee0e5;
  width: 100%;
  max-width: 400px;
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

function ItemList() {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem
          title="Fresh Food"
          description="Here at GIF we take pride in ordering the freshest ingredients, to ensure that the flavours of each ingredient are brought out in every dish"
        >
          <MdFastfood />
        </MenuItem>
        <MenuItem
          title="Home Delivery"
          description="Order via one of our partner apps to enjoy our food in the comfort of your own home."
        >
          <MdDeliveryDining />
        </MenuItem>
        <MenuItem
          title="Event & Party"
          description="Why not let us handle the catering for your next event, whether it be a birthday party, a corporate event or a wedding, get in touch with us to discuss how we can help."
        >
          <GiPartyPopper />
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}

export default ItemList
