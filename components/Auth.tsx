import useAuth from '@/hooks/useAuth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Loader from './Loader'

export default function Auth({
  children,
  role,
}: {
  role: string
  children: any
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  useAuth(true)

  React.useEffect(() => {
    if (status === 'loading') return
    if (
      !session?.user?.roles.includes('ADMIN') &&
      !session?.user?.roles.includes(role)
    ) {
      router.replace('/')
    }
  }, [session, status])

  if (session?.user) {
    return children
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader />
    </div>
  )
}
