import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rabii Luena</title>
        <meta
          name="description"
          content="Frontend developer working ReactJS and GraphQL."
        />
      </Head>

      <main>
        <h1>Hi!</h1>
        <h3>I am Rabii Luena...</h3>
      </main>
    </div>
  );
};

export default Home;
