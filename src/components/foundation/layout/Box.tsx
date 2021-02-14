import styled, { CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface BoxProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexWrap?: ResponsiveBreakpoints<CSSProperties['flexWrap']>
  backgroundImage?: ResponsiveBreakpoints<CSSProperties['backgroundImage']>
  backgroundRepeat?: ResponsiveBreakpoints<CSSProperties['backgroundRepeat']>
  backgroundPosition?: ResponsiveBreakpoints<
    CSSProperties['backgroundPosition']
  >
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>(
  ({
    display,
    flexDirection,
    justifyContent,
    flex,
    flexWrap,
    backgroundImage,
    backgroundRepeat,
    backgroundPosition,
  }) => {
    return propsToStyle({
      display,
      flexDirection,
      justifyContent,
      flex,
      flexWrap,
      backgroundImage,
      backgroundRepeat,
      backgroundPosition,
    })
  },
)
