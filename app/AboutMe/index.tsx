'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { Social } from '@/components/Social'
import { Photo } from '@/components/Photo'

const info = {
  name: 'Diogo Jorge',
  description: `Com uma experiência sólida em React, TypeScript e Node.js, 
  estou sempre buscando desafios que estimulem minha criatividade e inovação. 
  Meu entusiasmo em explorar novas tecnologias e enfrentar problemas me impulsiona
  a buscar oportunidades que permitam aplicar minhas habilidades. 
  Estou comprometido com meu crescimento profissional e com o sucesso das iniciativas 
  em que me envolvo.`,
  linkCv: '/docs/Currículo-Diogo_Jorge-2024.pdf',
}

export function AboutMe() {
  function handleDownload() {
    const link = document.createElement('a')
    link.href = info.linkCv
    link.download = 'Currículo-Diogo_Jorge-2024.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about-me">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Develop</span>
            <h1 className="h1 mb-6">
              Olá, sou <br /> <span className="text-accent">{info.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {info.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
