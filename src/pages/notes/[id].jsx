/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Note = ({ note }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default Note

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return { props: {} }
  }

  const { data } = await response.json()

  if (data) {
    return {
      props: { note: data },
    }
  }
}
