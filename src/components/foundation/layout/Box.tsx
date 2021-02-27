import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface BoxProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexWrap?: ResponsiveBreakpoints<CSSProperties['flexWrap']>
  backgroundImage?: ResponsiveBreakpoints<CSSProperties['backgroundImage']>
  backgroundRepeat?: ResponsiveBreakpoints<CSSProperties['backgroundRepeat']>
  boxShadow?: ResponsiveBreakpoints<CSSProperties['boxShadow']>
  padding?: ResponsiveBreakpoints<CSSProperties['padding']>
  backgroundPosition?: ResponsiveBreakpoints<
    CSSProperties['backgroundPosition']
  >
  backgroundColor?: 'primary'
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>(
  ({
    theme,
    display,
    flexDirection,
    justifyContent,
    flex,
    flexWrap,
    backgroundColor,
    backgroundImage,
    backgroundRepeat,
    backgroundPosition,
    boxShadow,
    padding,
  }) => {
    const themeBackgroundColor = backgroundColor
      ? theme.schema === 'light'
        ? theme.colors.background.light.color
        : theme.colors.background.main.color
      : 'initial'

    return css`
      background-color: ${themeBackgroundColor};
      ${propsToStyle({
        display,
        flexDirection,
        justifyContent,
        flex,
        flexWrap,
        backgroundImage,
        backgroundRepeat,
        backgroundPosition,
        boxShadow,
        padding,
      })}
    `
  },
)
