
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PersonagemFoto from './personagemFoto'
import PersonagemSobre from './personagemSobre'
import Layout from './layout'
import api from './api'
import ProximoPersonagem from './next'
import PersonagemContext from './persongemContext'
import PersonagemNome from './personagemNome'


const CharacterStyled = styled.div`

`

function Character({ match }) {
  const [character, setPersonagem] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setPersonagem(await api.getPersonagem(match.params.id || 1))
    }
    getCharacter()
  }, [match.params.id])
  return (
    <CharacterStyled>
      <PersonagemContext.Provider value={{
        character,
        setPersonagem: setPersonagem
      }}>
        <Layout
          next={<ProximoPersonagem />}
          name={<PersonagemNome name={character.name} />}
          image={<PersonagemFoto image={character.image} name={character.name} />}
          description={<PersonagemSobre gender={character.gender} species={character.species} status={character.status} />}
        />
      </PersonagemContext.Provider>
    </CharacterStyled>
  );
}

export default Character
