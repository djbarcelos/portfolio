"use client";

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'inicio',
        path:'/'
    },
    {
        name: 'projetos',
        path:'/projetos'
    },
    {
        name: 'contato',
        path:'/contato'
    },
]


export function MobileNav() {
    const pathname = usePathname()

    return <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-40 text-center text-2xl'>
                <h1>
                Diogo J <span className='text-accent'>.</span>
                </h1>
            </div>

            <nav className='flex flex-col justify-center items-center gap-8'>
            {
                links.map(link => {
                    return <Link key={link.path} href={link.path} className={`${ link.path === pathname && "text-accent border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                })
            }
            </nav>
            </SheetContent>
    </Sheet>
}