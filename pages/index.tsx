import type { NextPage } from 'next';
import SEO from '@app/components/SEO';
import ContentContainer from '@app/components/ContentContainer';
import Layout from '@app/components/Layout';
import WorkExperienceFeature from '~/features/WorkExperience';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
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
        <WorkExperienceFeature />
      </ContentContainer>

      <ContentContainer heading="contact" subheading="Ways to reach me out">
        Contact Me
      </ContentContainer>
    </Layout>
  );
};

export default Home;
