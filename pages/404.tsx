import ContentContainer from '~/components/ContentContainer';
import Layout from '~/components/Layout';
import NotFound from '~/features/NotFound';
import SEO from '~/components/SEO';

const Error = () => (
  <Layout>
    <SEO title="Not Found" />
    <div style={{ height: '10rem' }} />
    <ContentContainer heading="404">
      <NotFound />
    </ContentContainer>
  </Layout>
);

export default Error;
