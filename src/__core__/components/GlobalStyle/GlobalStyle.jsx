import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  :root {
    --primary-color: rgb(254, 230, 0);
    --secondary-color: rgb(237, 238, 240);
    --tertiary-color: rgb(52, 131, 250);
    --tertiary-color-high: rgb(33, 110, 226);
    --secondary-text-color: rgb(170, 170, 170);
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
    background-color: var(--secondary-color);
  }

  .section {
    padding: 1rem;
  }

  .btn-primary {
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    border: 1px solid var(--tertiary-color);
    background-color: var(--tertiary-color);
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 300ms ease;
  }

  .btn-primary:hover {
    background-color: var(--tertiary-color-high);
  }
`;
