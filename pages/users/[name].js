import React from 'react'
import { useRouter } from 'next/router'

export default function UsersName() {
  const router = useRouter()
  console.log('isReady:', router.isReady)
  console.log(router.query)
  return <div>uid={router.query.name}</div>
}
