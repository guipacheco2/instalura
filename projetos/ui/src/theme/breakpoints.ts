export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Breakpoints = Record<BreakpointKeys, number>

export const breakpoints = {
  lg: 992,
  md: 768,
  sm: 480,
  xl: 1200,
  xs: 0,
}

export const breakpointNames = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as BreakpointKeys[]
