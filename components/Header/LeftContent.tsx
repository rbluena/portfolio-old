import { Paragraph, PageTitle } from '@app/components/shared/styles';

import { LeftContainer } from './header.style';

const LeftContent = () => {
  return (
    <LeftContainer>
      <Paragraph size="sm" variant="light">
        Hello! Meet
      </Paragraph>
      <PageTitle size="xxl" variant="tertiary">
        Rabii Luena
      </PageTitle>
      <Paragraph size="lg" variant="light">
        Software engineer building scalable and perfomant frontend and mobile
        applications using modern technologies.
      </Paragraph>
    </LeftContainer>
  );
};

export default LeftContent;
