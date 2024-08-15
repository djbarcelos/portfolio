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
  { icon: <FaGithub />, path: 'https://github.com/djbarcelos' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/diogojorgegrijobarcelos/',
  },
  {
    icon: <BiLogoGmail />,
    path: `https://mail.google.com/mail/?view=cm&to=diogobarcelos94@gmail.com&su=Assunto%20do%20E-mail&body=Escreva%20aqui%20o%20conteúdo%20do%20seu%20e-mail`,
  },
]

export function Social(props: SocialProps) {
  const { containerStyles, iconStyles } = props
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
