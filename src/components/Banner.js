import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

import Kitchen from '../assets/img/kitchen.jpg'
import Wave from './Wave'

const Wrapper = styled.div`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--light);
  padding: 20px 0 40px;
  position: relative;
  overflow: hidden;
`

const Title = styled.h1`
  max-width: 500px;
  text-align: center;
  margin: 0;
  margin-top: 10px;
`

const Subtitle = styled.p`
  font-size: 25px;
`

const Description = styled.p`
  margin: 20px 0 0;
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Button = styled.button`
  outline: none;
  border: none;
  background-color: var(--pop-green);
  border-radius: 20px;
  color: var(--light);
  font-size: 12px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 35px;
  cursor: pointer;
`

function Banner() {
  return (
    <Wrapper>
      <Img src={Kitchen} alt="kitchen top" />
      <Subtitle className="cursive">Catering should be an experience</Subtitle>
      <Title>We use only the finest and freshest ingredients</Title>
      <Description>
        At Sway catering we know that food is an important part of life. <br />
        If the meal is not perfect, your event cannot be perfect.
      </Description>
      <Button>
        Request a Quote <FaChevronRight style={{ width: '5px' }} />
      </Button>
      <Wave />
    </Wrapper>
  )
}

export default Banner
