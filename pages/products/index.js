import { useRouter } from 'next/router'
import React from 'react'
export default function Index() {
  const { asPath } = useRouter()
  return <div>path:{asPath}</div>
}
