import Hero from '../components/Hero'
import Exhibition from '../components/home/Exhibition'
import HomeContent from '../components/home/HomeContent'
import Container from '../components/Container'
import HomeExhibition from '../components/home/HomeExhibition'
import Artist from '../components/home/Artist'
import BackgroundWave from '../components/BackgroundWave'
import ContactUs from '../components/ContactUs'

const Home = () => {
    return (
        <>
           <Container>
               <Hero/>
           </Container>

           <BackgroundWave/>

           <section className="bg-gpgp-blue">
              <Exhibition/>
           </section>

           <div className="sm:block hidden">
              <HomeExhibition />
           </div>

           <Container>
               <HomeContent/>
           </Container>

           <Container>
               <Artist/>
           </Container>

           <div className="sm:pt-0 pt-20">
               <BackgroundWave/>
           </div>

           <Container sectionClass="bg-gpgp-blue" classes="bg-gpgp-blue">
               <ContactUs/>
           </Container>
       </>
  )
}

export default Home