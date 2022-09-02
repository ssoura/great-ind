import React from 'react'
import styled from 'styled-components'

const ServiceWrapper = styled.div`
  flex: 1;
  padding: 20px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 500px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding-right: 20px;
  }
`

const Heading = styled.h3`
  color: var(--accent-maroon);
`

const P = styled.p`
  color: var(--light-maroon);
  margin-top: 15px;
  font-size: 1.2rem;
`

const ButtonList = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`

const Button = styled.button`
  border: 1px solid var(--accent-maroon);
  padding: 10px 15px;
  border-radius: 20px;
  background-color: var(--brown);
  color: var(--light);
`

function ServiceSection() {
  return (
    <ServiceWrapper>
      <Heading>Our Chef</Heading>
      <P>
        Our head Chef Pratap Singh Rawat, has been cooking in hotels and
        restaurants around the globe for the last 40 years. Having worked in
        California, Japan, Melbourne, Dubai, Italy and London, he has sharpened
        his skills and we are fortunate to have him leading our kitchen. Chef
        Pratap is cooking some of the finest Indian dishes you'll taste.
      </P>
      <ButtonList>
        <Button>Check My Portfolio</Button>
      </ButtonList>
    </ServiceWrapper>
  )
}

export default ServiceSection
