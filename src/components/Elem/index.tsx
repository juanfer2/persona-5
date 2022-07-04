import React from 'react';

import { ElemStyled } from './Elem.styles';

export interface Props {
  type: 'ab' | 'wk' | 'nu' | 'rs' | 'rp';
}

function Elem({ type }: Props) {
  return (
    <ElemStyled>
      <h2 className={type}>{type}</h2>
    </ElemStyled>
  );
}

export default Elem;
