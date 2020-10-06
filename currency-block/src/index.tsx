import React from 'react';
import { currencyHelper } from './currency.helper';

interface Props {
  amount: number,
  negative?: boolean,
  fontSize?: number
}

const Block: React.FC<Props> = ({amount = -67114126560, negative = undefined, fontSize = 18}) => {
  return (
    <>
      <div style={{fontSize: `${fontSize}px`, color: negative === true || amount < 0 ? ' crimson' : 'black'}}>{currencyHelper(amount, negative)}</div>
    </>
  );
}

export default Block;
