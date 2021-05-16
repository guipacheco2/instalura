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
  children?: React.ReactNode
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  flexDirection?: ResponsiveBreakpoints<CSSProperties['flexDirection']>
  flexGrow?: ResponsiveBreakpoints<CSSProperties['flexGrow']>
  flexWrap?: ResponsiveBreakpoints<CSSProperties['flexWrap']>
  justifyContent?: ResponsiveBreakpoints<CSSProperties['justifyContent']>
  listStyle?: ResponsiveBreakpoints<CSSProperties['listStyle']>
  margin?: ResponsiveBreakpoints<CSSProperties['margin']>
  marginBottom?: ResponsiveBreakpoints<CSSProperties['marginBottom']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  padding?: ResponsiveBreakpoints<CSSProperties['padding']>
  variant?: 'light' | 'main'
  width?: ResponsiveBreakpoints<CSSProperties['width']>
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
    flexGrow,
    flexWrap,
    justifyContent,
    listStyle,
    margin,
    marginBottom,
    marginTop,
    padding,
    theme,
    variant,
    width,
  }) => {
    const themeBackgroundColor = backgroundColor
      ? theme.schema === 'light'
        ? theme.colors[backgroundColor][variant || 'light'].color
        : theme.colors[backgroundColor][variant || 'main'].color
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
        flexGrow,
        flexWrap,
        justifyContent,
        listStyle,
        margin,
        marginBottom,
        marginTop,
        padding,
        width,
      })}
    `
  },
)
