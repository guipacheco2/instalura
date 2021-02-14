export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

export type Breakpoints = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoints[]
