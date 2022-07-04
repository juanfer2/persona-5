import React from 'react';

import DefaulImage from '@/assets/images/personas/P_large_025.png';
import { Element } from '@/components';
import { elementsData } from '@/data';

import { PersonaStyled } from './Persona.styles';

export interface Props {
  name: string;
  image: string;
}

function Persona({ name, image }: Props) {
  const elements = elementsData;
  // const url = image === '' ? DefaulImage : image;

  return (
    <PersonaStyled>
      <div className="image">
        <img src={image || DefaulImage} alt="persona" />
      </div>
      <div className="info">
        <h1>{name}</h1>
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
