import type { NextPage } from 'next';
import SEO from '@app/components/SEO';
import Header from '@app/components/Header';
import ContentContainer from '@app/components/ContentContainer';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <ContentContainer
        heading="projects"
        subheading="Some projects put my hands on"
      >
        Projects
      </ContentContainer>
      <ContentContainer
        heading="work experience"
        subheading="Places I am  honored to experience professional growth."
      >
        Work
      </ContentContainer>
      <ContentContainer heading="contact" subheading="Ways to reach me out">
        Contact Me
      </ContentContainer>
    </>
  );
};

export default Home;
