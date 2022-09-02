import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--light);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px 60px;
`

const Subtitle = styled.p`
  color: var(--grey);
  font-size: 20px;
`

const Title = styled.h2`
  margin-top: 10px;
  color: var(--dark-blue);
`

const Description = styled.p`
  margin-top: 15px;
  max-width: 550px;
`

function About() {
  return (
    <Wrapper>
      <Subtitle className="cursive">café in Hackney, London</Subtitle>
      <Title>We specialize in Indian food</Title>
      <Description className="notes">
        With 20 years of experience, we promise you the freshest,hand-crafted
        cooking sprinkled with our unique whimsical elegance and exceptional
        service.
      </Description>
    </Wrapper>
  )
}

export default About
