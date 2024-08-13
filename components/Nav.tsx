'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'inicio',
    path: '/',
  },
  {
    name: 'projetos',
    path: '/projetos',
  },
  {
    name: 'contato',
    path: '/contato',
  },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              link.path === pathname && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
