import '../styles/root.css';
import '../styles/lib.css';
import '../styles/styles.css';
import type { AppProps } from 'next/app';
import { Above } from '../components/Above';
import { NavLinks, FooterLinks, Logo, Author } from '../components/Links';
import { Overlay } from '../components/Overlay';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className="page">
        <Above />
        <header className="header flex-between z-10">
          <Logo />
          <nav>
            <NavLinks />
          </nav>
          <Overlay />
        </header>

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
      </div>
    </>
  )
}

export default MyApp