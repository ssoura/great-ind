import React from 'react'
import styled from 'styled-components'

import MenuSection from './Portfolio/MenuSection'
import ServiceSection from './Portfolio/ServiceSection'
import TitleSection from './Portfolio/TitleSection'

const Wrapper = styled.div`
  background-color: var(--brown);
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: unset;
  }
`

function Portfolio() {
  return (
    <Wrapper>
      <TitleSection />
      <MenuSection />
      <ServiceSection />
    </Wrapper>
  )
}

export default Portfolio
