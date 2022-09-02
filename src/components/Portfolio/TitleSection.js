import styled from 'styled-components'
import { Image, Box } from '@chakra-ui/react'

import chef from '../../assets/img/chef-scaled.jpeg'

const TitleSectionWrapper = styled.div`
  flex: 1;
  background-color: var(--dark);
  min-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1000px) {
    min-width: unset;
    min-height: 100px;
    width: 100%;
  }
`

const Title = styled.h1`
  color: var(--light);
  font-weight: normal;
  font-style: italic;
  font-size: 25px;
`

function TitleSection() {
  return (
    <TitleSectionWrapper>
      <Box>
        <Image width="100%" src={chef} alt="Dan Abramov" />
      </Box>
    </TitleSectionWrapper>
  )
}

export default TitleSection
