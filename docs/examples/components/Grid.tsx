import type React from 'react';
import styled from 'styled-components';

const number2string = (input?: number | string) => {
  if (typeof input === 'number') {
    return `${input}px`;
  }
  return input;
};

interface RowProps {
  $align?: React.CSSProperties['alignItems'];
  $justify?: React.CSSProperties['justifyContent'];
  $gap?: React.CSSProperties['gap'];
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.$align ?? 'center'};
  justify-content: ${props => props.$justify ?? 'unset'};
  gap: ${props => number2string(props.$gap) ?? 'unset'};
`;

interface ColProps {
  $flex?: React.CSSProperties['flex'];
}
export const Col = styled.div<ColProps>`
  flex: ${props => props.$flex ?? '0 0 auto'};
`;
