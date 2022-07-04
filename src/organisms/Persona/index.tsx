import React from 'react';

import PersonaImg from '@/assets/images/personas/ame-no-uzume.png';
import { Element } from '@/components';
import { elementsData } from '@/data';

import { PersonaStyled } from './Persona.styles';

export interface Props {}

function Persona() {
  const elements = elementsData;

  return (
    <PersonaStyled>
      <div className="image">
        <img src={PersonaImg} alt="persona" />
      </div>
      <div className="info">
        <h1>Ame-no-Uzume</h1>
        <div className="elements">
          {elements &&
            elements.map((element: any) => (
              <Element key={element.id} image={element.image} name={element.name} />
            ))}
        </div>
      </div>
    </PersonaStyled>
  );
}

export default Persona;
