import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '../icons'

export const AppHeader = styled.nav`
  height: 96px;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
`

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

export const Avatar = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
`

export const ProfileAvatar = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
`

export const PostCard = styled.div`
  background-color: #fff;
  width: 300px;
  height: 782px;
`

export const PostCardHeader = styled.div`
  background-color: #fff;
  width: 300px;
  height: 782px;
`

export const PostCardMedia = styled.div`
  background-color: #ccc;
  width: 300px;
  height: 782px;
`

export const PostCardContent = styled.div`
  background-color: #fff;
  width: 300px;
  height: 782px;
`
