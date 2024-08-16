'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import 'swiper/css'
import { WorkSliderBtns } from '@/components/layout/WorkSliderBtns'

interface Projects {
  num: string
  category: string
  title: string
  description: string
  stack: string[]
  image: string
  live: string
  github: string
}

const projects: Projects[] = [
  {
    num: '01',
    category: 'Front-end',
    title: 'Pomodoro Timer',
    description: `Uma aplicação de cronômetro para aplicar a técnica Pomodoro, que lista todas as contagens e suas respectivas situações.`,
    stack: ['React.js', 'Typescript', 'Styled-Components', 'Vite'],
    image: '/assets/timer.png',
    live: 'https://ignite-timer-iota-nine.vercel.app/',
    github: 'https://github.com/djbarcelos/ignite-timer',
  },
  {
    num: '02',
    category: 'Front-end',
    title: 'Lista de Tarefas',
    description: `Aplicação To-Do: é uma lista de tarefas que permite adicionar, remover e marcar itens como concluídos.`,
    stack: ['React.js', 'Typescript', 'Vite'],
    image: '/assets/to-do.png',
    live: 'https://to-do-list-project-reactjs-ts.vercel.app/',
    github: 'https://github.com/djbarcelos/to-do-list-project-reactjs-ts',
  },
  {
    num: '03',
    category: 'Front-end',
    title: 'Portfólio',
    description: `Site de apresentação pessoal, com uma lista das minhas habilidades e exibição dos meus projetos.`,
    stack: ['React.js', 'Next.js', 'Tailwindcss', 'Typescript'],
    image: '/assets/portfolio.png',
    live: 'https://diogo-jorge.vercel.app/',
    github: 'https://github.com/djbarcelos/portfolio',
  },
  {
    num: '04',
    category: 'Front-end',
    title: 'Projeto Feed',
    description: `A aplicação tem como objetivo possibilitar a publicação de comentários em postagens realizadas por usuários em uma rede social.`,
    stack: ['React.js', 'Vite'],
    image: '/assets/ignite-feed.png',
    live: 'https://project-ignite-react.vercel.app/',
    github: 'https://github.com/djbarcelos/project-ignite',
  },
]

export function Projects() {
  const [project, setProject] = useState(projects[0])

  function handleSlideChange(swiper: SwiperClass) {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      id="projetos"
      className="pt-4 pb-12 xl:pt-4 xl:pb-12"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="container mx-auto">
        {/* page title */}
        <div className="text-center xl:text-left">
          <h3 className="text-4xl font-bold xl:text-4xl">Meus Projetos</h3>
        </div>
        {/* initial of page */}
        <div className="min-h-[60vh] flex flex-col justify-center py-12 xl:px-0">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* info */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline number */}
                <div
                  className="text-8xl leading-none font-extrabold text-transparent"
                  style={{ WebkitTextStroke: '2px white' }}
                >
                  {project.num}
                </div>
                {/* category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  Projeto {project.category}
                </h2>
                {/* description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={item} className="text-xl text-accent">
                        {item}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    )
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* Live */}
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visualizar projeto demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* Git */}
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repositório</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            {/* slider */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[18rem] xl:h-[28rem] relative group flex justify-center items-center bg-pink-50/20 rounded-2xl">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover rounded-2xl"
                            alt=""
                          ></Image>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                {/* Slider button */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:bottom-[50%]" // xl:bottom-0 xl:w-max xl:justify-none
                  btnStyles="bg-accent/80 hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition--all text-white/50 mx-2 rounded"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
