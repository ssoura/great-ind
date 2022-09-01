import React from 'react'
import styled from 'styled-components'

import WaveSrc from '../assets/img/wave.svg'

const WaveImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`

function Wave() {
  return <WaveImg src={WaveSrc} alt="wave" />
}

export default Wave
