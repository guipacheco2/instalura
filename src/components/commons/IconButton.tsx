import styled, { css } from 'styled-components'

export const IconButton = styled.button(({ theme }) => {
  return css`
    border: 0;
    cursor: pointer;
    font-weight: bold;
    opacity: 1;
    transition: opacity ${theme.transition};
    color: ${theme.colors.tertiary.main};
    background-color: transparent;
    padding: 26px;
    border-radius: ${theme.borderRadius};
    outline: initial;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  `
})
