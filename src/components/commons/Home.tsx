import styled from 'styled-components'

export interface HomeProps {
  children: React.ReactNode
}

export const Home = styled.div<HomeProps>`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`
