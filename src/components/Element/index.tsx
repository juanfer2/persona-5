import React from 'react';

import { ElementStyled } from './Element.styles';

interface Props {
  name: string;
  image: string;
}

function Element({ name, image }: Props) {
  return (
    <ElementStyled>
      <div className="element-image">
        <img className={name} src={image} alt={name} />
      </div>
    </ElementStyled>
  );
}

export default Element;
