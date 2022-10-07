import type { NextPage } from 'next';
import SEO from '@app/components/SEO';
import ContentContainer from '@app/components/ContentContainer';
import Layout from '@app/components/Layout';
import WorkExperienceFeature from '~/features/WorkExperience';
import ContactsFeature from '~/features/Contacts';
import data from '~/data/contacts.json';

const Home: NextPage = () => {
  return (
    <Layout showHero>
      <SEO />
      <ContentContainer
        heading="projects"
        subheading="Some projects put my hands on"
      >
        Projects
      </ContentContainer>

      <ContentContainer
        heading="work experience"
        subheading="Places I am  honored to experience professional growth"
      >
        <WorkExperienceFeature />
      </ContentContainer>

      <ContentContainer
        heading="contact"
        subheading="Please reach me out for any enquiries"
      >
        <ContactsFeature
          phone={data.phone}
          email={data.email}
          social={data.social}
        />
      </ContentContainer>
    </Layout>
  );
};

export default Home;
