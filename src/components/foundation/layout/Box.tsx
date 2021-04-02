import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../../theme'

export interface BoxProps {
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  backgroundColor?:
    | 'background'
    | 'borders'
    | 'primary'
    | 'secondary'
    | 'tertiary'
  backgroundImage?: ResponsiveBreakpoints<CSSProperties['backgroundImage']>
  backgroundPosition?: ResponsiveBreakpoints<
    CSSProperties['backgroundPosition']
  >
  backgroundRepeat?: ResponsiveBreakpoints<CSSProperties['backgroundRepeat']>
  borderRadius?: boolean
  boxShadow?: ResponsiveBreakpoints<CSSProperties['boxShadow']>
  children: React.ReactNode
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  flexWrap?: ResponsiveBreakpoints<CSSProperties['flexWrap']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  listStyle?: ResponsiveBreakpoints<CSSProperties['listStyle']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  padding?: ResponsiveBreakpoints<CSSProperties['padding']>
}

export const Box = styled.div<BoxProps>(
  ({
    alignItems,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    borderRadius,
    boxShadow,
    display,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    listStyle,
    marginBottom,
    marginTop,
    padding,
    theme,
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
        alignItems,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        boxShadow,
        display,
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        listStyle,
        marginBottom,
        marginTop,
        padding,
      })}
    `
  },
)
