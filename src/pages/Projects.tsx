import Container from "../components/Container";
import About from "../components/projects/Abouts";
import ArtistSection from "../components/projects/ArtistSection";
import Attention from "../components/projects/Attention";
import ContributionSection from "../components/projects/Contribution";
import Exhibition from "../components/projects/Exhibition";
import GpgpSection from "../components/projects/GpgpSection";
import ProjectHero from "../components/projects/ProjectHero";
import JoinUs from './../components/projects/JoinUs';

const Project = () => {
  return (
    <>
      <Container>
        <ProjectHero />
      </Container>

      <section>
        <About />
      </section>

      <section>
        <GpgpSection/>
      </section>

      <section>
        <Attention/>
      </section>

      <section>
        <Exhibition/>
      </section>

      <section>
        <ArtistSection/>
      </section>

      <section>
        <JoinUs/>
      </section>

      <section>
        <ContributionSection/>
      </section>
    </>
  );
};

export default Project;
