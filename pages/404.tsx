import ContentContainer from '@app/components/ContentContainer';
import Layout from '@app/components/Layout';
import NotFound from '~/features/NotFound';

const Error = () => (
  <Layout>
    <div style={{ height: '10rem' }} />
    <ContentContainer heading="404">
      <NotFound />
    </ContentContainer>
  </Layout>
);

export default Error;
