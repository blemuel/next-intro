import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>This is your id: ${id}</div>
}

export default Page
