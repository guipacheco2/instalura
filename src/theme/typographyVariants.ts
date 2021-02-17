type TypographyVariant = {
  fontSize: string
  fontWeight: number
  lineHeight: number
}

export type TypographyVariantKeys =
  | 'title'
  | 'titleXS'
  | 'subTitle'
  | 'paragraph1'
  | 'paragraph2'
  | 'smallestException'

export type TypographyVariants = Record<
  TypographyVariantKeys,
  TypographyVariant
>

export const typographyVariants: TypographyVariants = {
  title: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  titleXS: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  subTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  paragraph1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.25,
  },
  paragraph2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.25,
  },
  smallestException: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1,
  },
}
