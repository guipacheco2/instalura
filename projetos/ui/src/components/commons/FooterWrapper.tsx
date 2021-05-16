import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  z-index: 1;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) =>
      theme.schema === 'light'
        ? theme.colors.primary.main.color
        : theme.colors.tertiary.light.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`
