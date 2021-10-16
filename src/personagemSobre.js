import React from 'react'
import styled from 'styled-components'

const PersonagemSobreStyled = styled.div`
  .character-label {
    background: #a377dd;
    padding: 1em;
    color: white;
    border-radius: 10px;
    text-align: left;
    font-size: 25px;
    font-weight: 400;
    /* display: inline-flex; */
  }
`

function PersonagemSobre({ status, gender, species }) {
  return (
    <PersonagemSobreStyled>
      <div class="character-labels">
        <h3 class="character-label">Genero: {gender}</h3>
        <h3 class="character-label">Especie: {species} </h3>
        <h3 class="character-label">Status: {status}</h3>
      </div>
    </PersonagemSobreStyled>
  )
}

export default PersonagemSobre
