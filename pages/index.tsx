import type { NextPage } from 'next';
import SEO from '@app/components/SEO';
import Header from '@app/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
    </>
  );
};

export default Home;
