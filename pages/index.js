import Head from 'next/head'
import Hero from '../components/Hero'
import Movie from '../components/Movie'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero_theatre from '../components/Hero_theatre'
import Hero_time from '../components/Hero_time'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero_time />
      <Movie />
      <Footer />
    </div>
  )
}

