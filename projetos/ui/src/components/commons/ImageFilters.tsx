import React from 'react'
import styled from 'styled-components'
import { Text } from '../foundation'

const StyledImageFilters = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  overflow: auto;
`

const StyledImageFiltersItem = styled.div`
  width: 90px;
  margin: 4px;
  cursor: pointer;
`

const StyledImageFiltersImage = styled.img`
  width: 90px;
  height: 90px;
`

const filters = [
  { label: 'Normal', name: 'none' },
  { label: '1977', name: '1977' },
  { label: 'Aden', name: 'aden' },
  { label: 'Amaro', name: 'amaro' },
  { label: 'Ashby', name: 'ashby' },
  { label: 'Brannan', name: 'brannan' },
  { label: 'Brooklyn', name: 'brooklyn' },
  { label: 'Charmes', name: 'charmes' },
  { label: 'Clarendon', name: 'clarendon' },
  { label: 'Crema', name: 'crema' },
  { label: 'Dogpatch', name: 'dogpatch' },
  { label: 'Earlybird', name: 'earlybird' },
  { label: 'Gingham', name: 'gingham' },
  { label: 'Ginza', name: 'ginza' },
  { label: 'Hefe', name: 'hefe' },
  { label: 'Helena', name: 'helena' },
  { label: 'Hudson', name: 'hudson' },
  { label: 'Inkwell', name: 'inkwell' },
  { label: 'Kelvin', name: 'kelvin' },
  { label: 'Kuno', name: 'juno' },
  { label: 'Lark', name: 'lark' },
  { label: 'Lo-Fi', name: 'lofi' },
  { label: 'Ludwig', name: 'ludwig' },
  { label: 'Maven', name: 'maven' },
  { label: 'Mayfair', name: 'mayfair' },
  { label: 'Moon', name: 'moon' },
  { label: 'Nashville', name: 'nashville' },
  { label: 'Perpetua', name: 'perpetua' },
  { label: 'Poprocket', name: 'poprocket' },
  { label: 'Reyes', name: 'reyes' },
  { label: 'Rise', name: 'rise' },
  { label: 'Sierra', name: 'sierra' },
  { label: 'Skyline', name: 'skyline' },
  { label: 'Slumber', name: 'slumber' },
  { label: 'Stinson', name: 'stinson' },
  { label: 'Sutro', name: 'sutro' },
  { label: 'Toaster', name: 'toaster' },
  { label: 'Valencia', name: 'valencia' },
  { label: 'Vesper', name: 'vesper' },
  { label: 'Walden', name: 'walden' },
  { label: 'Willow', name: 'willow' },
  { label: 'X-Pro II', name: 'xpro-ii' },
]

export interface ImageFiltersProps {
  imageURL: string
  onChange: (filter: string) => void
  selected: string
}

export function ImageFilters({
  imageURL,
  onChange,
  selected,
}: ImageFiltersProps): JSX.Element {
  return (
    <StyledImageFilters>
      {filters.map((filter) => {
        return (
          <StyledImageFiltersItem
            aria-label="filter"
            key={filter.name}
            onClick={() => onChange(filter.name)}
          >
            <StyledImageFiltersImage
              className={`filter-${filter.name}`}
              src={imageURL}
            />
            <Text
              variant="paragraph1"
              color={
                filter.name === selected ? 'primary.main' : 'tertiary.main'
              }
            >
              {filter.label}
            </Text>
          </StyledImageFiltersItem>
        )
      })}
    </StyledImageFilters>
  )
}
