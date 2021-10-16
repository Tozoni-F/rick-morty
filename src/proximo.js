import React from 'react'
import styled from 'styled-components'

const ProximoStyled = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 25px;
  text-transform: uppercase;
`

function Proximo() {
  return (
    <ProximoStyled>
      Próximo
    </ProximoStyled>
  )
}

export default Proximo
