import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface BoxProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexWrap?: ResponsiveBreakpoints<CSSProperties['flexWrap']>
  backgroundImage?: ResponsiveBreakpoints<CSSProperties['backgroundImage']>
  backgroundRepeat?: ResponsiveBreakpoints<CSSProperties['backgroundRepeat']>
  boxShadow?: ResponsiveBreakpoints<CSSProperties['boxShadow']>
  padding?: ResponsiveBreakpoints<CSSProperties['padding']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  listStyle?: ResponsiveBreakpoints<CSSProperties['listStyle']>
  backgroundPosition?: ResponsiveBreakpoints<
    CSSProperties['backgroundPosition']
  >
  backgroundColor?:
    | 'background'
    | 'borders'
    | 'primary'
    | 'secondary'
    | 'tertiary'
  borderRadius?: boolean
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>(
  ({
    theme,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    flex,
    flexWrap,
    backgroundColor,
    backgroundImage,
    backgroundRepeat,
    backgroundPosition,
    boxShadow,
    borderRadius,
    padding,
    marginTop,
    marginBottom,
    listStyle,
  }) => {
    const themeBackgroundColor = backgroundColor
      ? theme.schema === 'light'
        ? theme.colors[backgroundColor].light.color
        : theme.colors[backgroundColor].main.color
      : 'initial'

    const themeBorderRadius = borderRadius ? theme.borderRadius : 'initial'

    return css`
      background-color: ${themeBackgroundColor};
      border-radius: ${themeBorderRadius};
      ${propsToStyle({
        display,
        flexDirection,
        alignItems,
        justifyContent,
        flex,
        flexWrap,
        backgroundImage,
        backgroundRepeat,
        backgroundPosition,
        boxShadow,
        padding,
        marginTop,
        marginBottom,
        listStyle,
      })}
    `
  },
)
