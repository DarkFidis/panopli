import type { NextPage } from 'next'
import {Header} from "../components/Header";
import {Map} from '../components/Map'
import {About} from "../components/About";
import {ReviewsSection} from "../components/ReviewsSection";
import {Places} from "../components/Feature";
import {Footer} from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Map/>
      <Places />
      <About />
      <ReviewsSection />
      <Footer />
    </>
  )
}

export default Home
