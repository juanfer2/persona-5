import React from 'react';

import DefaulImage from '@/assets/images/personas/P_large_025.png';
import { Element } from '@/components';
import { personaData } from '@/data';
import { elementsData } from '@/data/elements';

import { PersonaStyled } from './Persona.styles';

export interface Props {
  name: string;
  image: string;
  arcana: string;
  elems: string[];
}

function Persona({ name, image, arcana, elems }: Props) {
  const elements = elementsData;

  return (
    <PersonaStyled>
      <div className="image">
        <img src={image || DefaulImage} alt="persona" />
        <h2>{arcana}</h2>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <div className="elements">
          {elements &&
            elements.map((element: any, index: number) => (
              <div key={element.id} className='elems'>
                <Element image={element.image} name={element.name} />
                {elems[index] !== '-' && <h2 className="elem">{elems[index]}</h2>}
              </div>
            ))}
        </div>
      </div>
    </PersonaStyled>
  );
}

export default Persona;
