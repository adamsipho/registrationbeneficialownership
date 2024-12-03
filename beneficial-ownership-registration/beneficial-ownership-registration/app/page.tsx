import Header from './components/Header'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </>
  )
}

