/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header
    sx={{
      variant: 'nav.header',
    }}
  >
    <nav
      sx={{
        variant: 'nav.body',
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>notes</a>
      </Link>
      <a
        sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer',
        }}
        href={process.env.HELP_APP_URL}
      >
        Help
      </a>
    </nav>
  </header>
)

export default Nav
