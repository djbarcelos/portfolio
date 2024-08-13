"use client";

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function PageTransition(props: Props) {
    const { children } = props

    const pathname = usePathname()

    return <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{opacity:1}} 
            animate={{ opacity: 0, transition: { delay: 0.5, duration: 0.2, ease: 'easeInOut'}}} 
            className='h-screen w-screen fixed bg-primary top-0 pointer-events-none' />
        </div>
        {children}
        </AnimatePresence>
} 