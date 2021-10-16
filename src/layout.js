import React from 'react'
import styled from 'styled-components'
import Proximo from './proximo'

const LayoutStyled = styled.div`
  position: relative;
  display: grid;
  height: calc(100vh - 8em);
  grid-column-gap: 1em;
  grid-template-columns: 50px 1fr 1fr 200px;
  grid-template-rows: 230px 100px 1fr 1fr 1fr;
  grid-template-areas: "asset-top logo logo social" "name character-name avatar avatar" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow other-line" ;

  .name-area {
    display: flex;
    align-items: center;
    grid-area: character-name;
  }
  .description-area {
    grid-area: character-description;
  }
  .image-area {
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next-area {
    grid-area: arrow;
    display: flex;
  }

  .learn-more-area {
    grid-area: learn-more;
  }
  
  .navigation-area {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    &.name {
      grid-area: name;
    }
    &.about {
      grid-area: about;
    }
  }
`

function Layout({ name, image, description, next }) {
  return (
    <LayoutStyled>
      <div className="navigation-area name">
      </div>
      <div className="name-area">
        {name}
      </div>
      <div className="image-area">
        {image}
      </div>
      <div className="navigation-area about">
      </div>
      <div className="description-area">
        {description}
      </div>
      <span className="vertical-align asset-bottom-area">
      </span>
      <div></div>
      <div className="learn-more-area">
        <Proximo />
      </div>
      <div className="next-area">
        {next}
      </div>
    </LayoutStyled>
  )
}

export default Layout
