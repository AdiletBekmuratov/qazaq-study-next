import { useSession } from 'next-auth/react'
import { FC, useEffect } from 'react'

interface HandlerProps {
  setInterval: any
}

const RefreshTokenHandler: FC<HandlerProps> = ({ setInterval }) => {
  const { data: session } = useSession()
  useEffect(() => {
    if (!!session) {
      const timeRemaining = Math.round(
        ((session.expires as any) - 3 * 60 * 1000 - Date.now()) / 1000
      )
      setInterval(timeRemaining > 0 ? timeRemaining : 0)
    }
  }, [session])

  return null
}

export default RefreshTokenHandler
