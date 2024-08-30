import { useContext } from 'react';
import styled from 'styled-components';
import { getMediaQueries } from './grid-styles-generator';
import { GridContext } from './Row';

const GridItemWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  ${getMediaQueries}
`;

export const Column = ({ children, ...props }) => {
  const spacingProps = useContext(GridContext);

  return (
    <GridItemWrapper {...props} {...spacingProps}>
      {children}
    </GridItemWrapper>
  );
};
