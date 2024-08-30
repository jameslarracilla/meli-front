import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = ({ children, ...props }) => {
  return (
    <div {...props}>
      <ContainerWrapper>{children}</ContainerWrapper>
    </div>
  );
};
