import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tom Oketch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi! 👋🏾" />
        <p className="description">
          My name is Tom Clement Oketch. Welcome to my site.
        </p>
        <p className="description">
          I build software and make music.
        </p>
        <p className="description">
          Find me on <a href="http://linkedin.com/in/tomoketch/">LinkedIn</a>, <a href="https://twitter.com/tc_oketch">Twitter</a> or <a href="http://github.com/tomclement">GitHub</a>.
         </p>

      </main>

      <Footer />
    </div>
  )
}
