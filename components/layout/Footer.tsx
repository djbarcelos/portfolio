import React from 'react'
import { Social } from '../Social'

export function Footer() {
  return (
    <footer className="py-6 text-white">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <Social
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
        <span>
          Copyright © 2024 Diogo J<span className="text-accent">.</span>{' '}
          Barcelos
        </span>
      </div>
    </footer>
  )
}
