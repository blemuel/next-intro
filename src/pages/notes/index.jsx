import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Link is used for client side routering
// Programmatic routering - router.push -- client side

const Page = () => {
  const router = useRouter()
  const noteId = 2

  return (
    <div>
      <h1>Notes index</h1>
      <div>
        <div>
          <Link href="/notes/[id]" as={`notes/1`}>
            <a>Note 1</a>
          </Link>
        </div>
        <div>
          <Link href="/notes/[id]" as={`notes/2`}>
            <a>Note 2</a>
          </Link>
        </div>
        <button onClick={(e) => router.push('/')}>Back to home</button>
        <button onClick={(e) => router.push('/notes/[id]', `/notes/${noteId}`)}>
          Go to note 2
        </button>
      </div>
    </div>
  )
}

export default Page
