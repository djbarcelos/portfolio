import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { Social } from '@/components/Social'

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Develop</span>
            <h1 className="h1 mb-6">
              Olá, sou <br /> <span className="text-accent">Diogo Jorge</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Sou especialista em criar experiências digitais elegantes e sou
              proficiente em diversas linguagens de programação e tecnologias.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home
