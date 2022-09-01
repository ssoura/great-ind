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
      <Heading>Services</Heading>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        exercitationem, eveniet, hic praesentium vero unde aspernatur quos,
        accusantium error expedita fugit velit.
      </P>
      <P className="notes">
        Quia voluptate voluptatum placeat nisi veritatis dolores, eligendi
        libero asperiores ipsum sed commodi laborum ad quibusdam nulla nobis
        autem saepe cupiditate iusto architecto molestias aspernatur, sint ipsam
        praesentium?
      </P>
      <P className="notes">
        Quia voluptate voluptatum placeat nisi veritatis dolores, eligendi
        libero asperiores ipsum sed commodi laborum ad quibusdam nulla nobis
        autem saepe cupiditate iusto architecto molestias aspernatur, sint ipsam
        praesentium?
      </P>
      <ButtonList>
        <Button>Download CV</Button>
        <Button>Check My Portfolio</Button>
      </ButtonList>
    </ServiceWrapper>
  )
}

export default ServiceSection
