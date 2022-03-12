import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },
  nav: {
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%',
    },
    header: {
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    },
  },
  styles: {
    ...roboto.styles,
  },
}

export default theme
