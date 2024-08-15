import React from 'react'

import { AboutMe } from './AboutMe'
import { Skills } from '@/components/Skills'
import { Projects } from './Projects'

function Home() {
  return (
    <div className="h-full">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
