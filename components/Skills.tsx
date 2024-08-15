'use client'
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiTypescript } from 'react-icons/si'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const skills = [
  {
    name: 'html 5',
    icon: <FaHtml5 />,
  },
  {
    name: 'css 3',
    icon: <FaCss3 />,
  },
  {
    name: 'javascript',
    icon: <FaJs />,
  },
  {
    name: 'react.js',
    icon: <FaReact />,
  },
  {
    name: 'next.js',
    icon: <SiNextdotjs />,
  },
  {
    name: 'node.js',
    icon: <FaNodeJs />,
  },
  {
    name: 'mongodb',
    icon: <SiMongodb />,
  },
  {
    name: 'typescript',
    icon: <SiTypescript />,
  },
]

export function Skills() {
  return (
    <section id="skills" className="pt-4 pb-12 xl:pt-0 xl:pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">
          <div className="text-center xl:text-left">
            <h3 className="text-4xl font-bold xl:text-4xl">
              Minhas Habilidades
            </h3>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
