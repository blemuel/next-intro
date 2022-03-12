import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  // notes/1/2/3/4
  // params: [1,2,3,4]

  //catch all routes
  const { params } = router.query

  return <div>This is your id: ${params}</div>
}

export default Page
