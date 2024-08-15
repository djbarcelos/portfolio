'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { RiCloseFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const links = [
  {
    name: 'habilidades',
    path: '#skills',
  },
  {
    name: 'projetos',
    path: '#projetos',
  },
]

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, delay: 0.1 },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 100, delay: 0.1 },
    },
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <section className="relative">
      <button className="flex justify-center items-center" onClick={toggleMenu}>
        <CiMenuFries className="text-[32px] text-accent" />
      </button>

      {isOpen && (
        <motion.div
          className="fixed inset-y-0 right-0 bg-primary z-50 flex flex-col p-6 w-3/4 drop-shadow-2xl"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          initial="closed"
        >
          <div className="flex flex-col">
            {/* logo and close button  */}
            <div className="mt-10 text-center text-2xl flex flex-row">
              <div className="w-full flex justify-center items-center">
                D<span className="text-accent">.</span> Barcelos
              </div>
              <button
                className="w-full flex justify-end items-center text-accent"
                onClick={toggleMenu}
              >
                <RiCloseFill size={34} />
              </button>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8 mt-40">
              {links.map((link) => {
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`${
                      link.path === pathname &&
                      'text-accent border-b-2 border-accent'
                    } text-xl capitalize hover:text-accent transition-all`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </section>
  )
}
