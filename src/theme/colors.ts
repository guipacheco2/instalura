export const light = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
}

export const dark = {
  background: {
    light: {
      color: '#1f1f1f',
    },
    main: {
      color: '#030506',
    },
  },
  borders: {
    main: {
      color: '#181F22',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFA59A',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#fff',
      contrastText: '#070C0E',
    },
    light: {
      color: '#D4D4D4',
      contrastText: '#070C0E',
    },
  },
}

export type Colors = typeof light
