import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

type SocialItem = {
  icon: JSX.Element
  path: string
}

type SocialProps = {
  containerStyles?: string
  iconStyles?: string
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <BiLogoGmail />, path: '' },
]

export function Social(props: SocialProps) {
  const { containerStyles, iconStyles } = props
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
