import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { AboveHeader } from '../components/AboveHeader';
import { NavLinks, Author, FooterLinks, Logo } from '../components/Links';
import { MobileNav } from '../components/MobileNav';
import { motion } from 'framer-motion';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <motion.div className="page"

      >
        <AboveHeader />
        <header className="header flex-between z-10">
          <Logo />
          <nav className="nav">
            <NavLinks />
          </nav>
          <MobileNav />
        </header>

        <hr className="header-hr" />

        <main className="main">
          <Component {...pageProps} />
        </main>

        <hr />

        <footer className="footer grid-col-2">
          <div className="grid-col-4">
            <FooterLinks />
          </div>
          <div className="flex-end">
            <Author />
          </div>
        </footer>
      </motion.div>
    </>
  )
}

export default MyApp