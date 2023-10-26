import Container from "../components/Container";
import Information from "../components/gallery/Information";
import ContributionSection from "../components/gallery/Contribution";
import GalleryHero from "../components/gallery/GalleryHero";
import Slides from "../components/gallery/Slides";

const Gallery = () => {
  return (
    <>
      <Container>
         <GalleryHero />
      </Container>

      <section>
        <Information />
      </section>

      <Container>
         <Slides/>
      </Container>

      <section>
        <ContributionSection/>
      </section>
    </>
  );
};

export default Gallery;
