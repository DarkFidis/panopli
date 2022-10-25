import type { NextPage } from 'next'
import {Header} from "../components/Header";
import {About} from "../components/About";
import {ReviewsSection} from "../components/ReviewsSection";
import {Footer} from "../components/Footer";
import {MapTainer} from "../containers/MapContainer";

const Home: NextPage = () => {
  return (
      <>
        <Header/>
        <MapTainer />
        <About />
        <ReviewsSection />
        <Footer />
      </>
  )
}

export default Home
