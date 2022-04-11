import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

type NavLinkProps = {
  href?: string
  activeClassName?: string
  className?: string
  children?: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
}) => {
  const { pathname } = useRouter()
  return (
    <Link href={href ? href : '/'}>
      <a
        className={classNames(className, {
          [activeClassName]: pathname.startsWith(`${href}`),
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
