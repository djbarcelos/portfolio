'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
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

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Projeto 1',
    description: 'descrição do projeto um.',
    stack: ['React.js', 'JavaScript.js'],
    image:
      'https://raw.githubusercontent.com/manuncorrea/search-for-the-fipe-table/Emanuele/public/screenshot.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Projeto 2',
    description: 'descrição do projeto dois.',
    stack: ['React.js', 'Typescript'],
    image:
      'https://raw.githubusercontent.com/manuncorrea/search-for-the-fipe-table/Emanuele/public/screenshot.png',
    live: '',
    github: '',
  },
]

export function Projects() {
  const [project, setProject] = useState(projects[0])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSlideChange(swiper: any) {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      id="projetos"
      className="pt-4 pb-12 xl:pt-4 xl:pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto">
        {/* page title */}
        <div className="text-center xl:text-left">
          <h3 className="text-4xl font-bold xl:text-4xl">Meus Projetos</h3>
        </div>
        {/* initial of page */}
        <div className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
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
                <ul className="flex gap-4">
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
                  <Link href={project.live}>
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
                  <Link href={project.github}>
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
                      <div className="h-[18rem] xl:h-[28rem] relative group flex justify-center items-center bg-pink-50/20">
                        <div></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          ></Image>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
