import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '../icons'

const StyledSearchInputWrapper = styled.label`
  border: 1px solid #88989e;
  border-radius: 12px;
  padding: 0 12px;
  display: flex;
  align-items: center;
`

const StyledSearchInput = styled.input`
  padding: 12px;
  border: none;
  outline: none;
`

export function SearchInput(): JSX.Element {
  return (
    <StyledSearchInputWrapper htmlFor="search-input">
      <SearchIcon />
      <StyledSearchInput id="search-input" placeholder="Pesquisar" />
    </StyledSearchInputWrapper>
  )
}
