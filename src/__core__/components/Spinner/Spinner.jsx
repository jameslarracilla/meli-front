import styled from 'styled-components';

export const Spinner = styled.div`
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: var(--modal-color);

  ::after {
    content: '';
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border-top: 10px solid white;
    border-right: 10px solid white;
    border-bottom: 10px solid white;
    border-left: 10px solid var(--tertiary-color);
    animation: spin 1.1s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
