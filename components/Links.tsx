import ActiveLink from './ActiveLink'
import Link from 'next/link'
import { AiOutlineGithub } from "react-icons/ai"

export const NavLinks: React.FC = () => {
  return (
    <>
      <ActiveLink activeClassName="active" href="/"><a className="relative transition opacity-66">Home</a></ActiveLink>
      <ActiveLink activeClassName="active" href="/about"><a className="relative transition opacity-66">About</a></ActiveLink>
      <ActiveLink activeClassName="active" href="/projects"><a className="relative transition opacity-66">Projects</a></ActiveLink>
      <a
        href="https://drive.google.com/file/d/1SLYPurTDccShrs43lrU8GDeelNG1OEEx/view?usp=sharing"
        target="_blank" rel="noopener noreferrer"
        className="transition opacity-66"
      >
        Resume
      </a>
      <ActiveLink activeClassName="active" href="/blog"><a className="relative transition opacity-66">Blog</a></ActiveLink>
      <ActiveLink activeClassName="active" href="/contact"><a className="relative transition opacity-66">Contact</a></ActiveLink>
    </>
  )
}

export const FooterLinks: React.FC = () => {
  return (
    <>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </>
  )
}

export const Icons: React.FC = () => {
  return (
    <>
      <a
        href="https://github.com/tsydykh-pokhodiev"
        target="_blank" rel="noopener noreferrer"
        className="icons w-24 br-50 flex-center transition scale"
      >
        <AiOutlineGithub />
      </a>
    </>
  )
}

export const Logo: React.FC = () => {
  return (
    <>
      <Link href="/">
        <a className="logo flex-center text-center w-56 br-50 neomorphism light">T</a>
      </Link>
    </>
  )
}

export const Author: React.FC = () => {
  return (
    <>
      <Link href="/about">
        <a>© Tsydykh Pokhodiev, 2021</a>
      </Link>
    </>
  )
}