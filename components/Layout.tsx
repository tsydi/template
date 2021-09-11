import Head from 'next/head'

interface typesLayout {
  children: React.ReactNode;
  description: string;
  keywords: string;
  title: string;
};

export const Layout: React.FC<typesLayout> = ({ children, description, keywords, title}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}