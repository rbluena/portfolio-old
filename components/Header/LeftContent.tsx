import { Paragraph, PageTitle } from '@app/components/shared/styles';

import { LeftContainer } from './header.style';

const LeftContent = () => {
  return (
    <LeftContainer>
      <Paragraph as="span" size="sm" variant="light">
        Hello! Meet
      </Paragraph>
      <PageTitle size="xxl" variant="tertiary">
        rabii luena
      </PageTitle>
      <Paragraph size="lg" variant="light">
        Software engineer building scalable and perfomant frontend and mobile
        applications using cutting-edge tools and technologies.
      </Paragraph>
    </LeftContainer>
  );
};

export default LeftContent;
