import Link from 'next/link'
import React, { ButtonHTMLAttributes, FC, useEffect, useState } from 'react'

type buttonTypes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'className' | 'onClick'
>

interface Props {
  children?: React.ReactNode
  onClick?: buttonTypes['onClick']
  className?: buttonTypes['className']
  type?: buttonTypes['type']
  link?: string
  backgroundColor?: string
  textColor?: string
  rounded?: string
}

const customClass =
  'ripple-button flex cursor-pointer justify-center items-center overflow-hidden relative py-2 px-4 font-semibold tracking-wide active:scale-95 transition-all'

const Button: FC<Props> = ({
  children,
  onClick,
  className,
  type,
  link,
  backgroundColor = 'bg-dark-blue',
  textColor = 'text-gray-100',
  rounded = 'rounded-md',
}) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  if (link) {
    return (
      <Link href={link}>
        <a
          onClick={(e) => {
            const node = e.target as HTMLElement
            const rect = node.getBoundingClientRect()
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
          }}
          className={
            customClass +
            ' ' +
            className +
            ' ' +
            textColor +
            ' ' +
            backgroundColor +
            ' ' +
            rounded
          }
        >
          {isRippling ? (
            <span
              className="ripple"
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ''
          )}
          <span className="content">{children}</span>
        </a>
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={(e) => {
        const node = e.target as HTMLElement
        const rect = node.getBoundingClientRect()
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onClick && onClick(e)
      }}
      className={
        customClass +
        ' ' +
        className +
        ' ' +
        textColor +
        ' ' +
        backgroundColor +
        ' ' +
        rounded
      }
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span className="content">{children}</span>
    </button>
  )
}

export default Button
