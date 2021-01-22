import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>🌮⭐️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="🌮🌮🌮🌮🌮🌮🌮🌮🌮" />
        <img className="gary" src="/gary.png"></img>
      </main>
    </div>
  )
}
