import styled from 'styled-components'

export interface GridRowProps {
  children: React.ReactNode
}

export const GridRow = styled.div<GridRowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`
