import React from 'react'
import styled from 'styled-components'

const PersonagemFotoStyled = styled.img`
  max-width: 100%;
  border-radius: 10%;
`

function PersonagemFoto({ image, name }) {
  return (
    <PersonagemFotoStyled src={image} alt={name} />
  )
}

export default PersonagemFoto
