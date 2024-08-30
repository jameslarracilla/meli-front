import { createContext } from 'react';
import styled from 'styled-components';

import { SPACING_SCALER } from '../../utils/constants';

export const GridContext = createContext({
  spacing: 0,
  rowSpacing: 0,
  colSpacing: 0,
});

const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ spacing, colSpacing, rowSpacing }) =>
    `${(rowSpacing || spacing || 0) * SPACING_SCALER}px ${
      (colSpacing || spacing || 0) * SPACING_SCALER
    }px`};
`;

export const Row = ({ children, ...props }) => {
  const { rowSpacing, colSpacing, spacing } = props;

  return (
    <GridContext.Provider value={{ spacing, rowSpacing, colSpacing }}>
      <ColumnWrapper {...props}>{children}</ColumnWrapper>
    </GridContext.Provider>
  );
};
