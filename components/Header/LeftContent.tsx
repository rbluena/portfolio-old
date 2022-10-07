import { PageTitle, Heading, Text } from '@app/components/shared/styles';
import { LeftContainer } from './header.style';

const LeftContent = () => {
  return (
    <LeftContainer>
      <Text as="span" size="sm" variant="light">
        Hello! Meet
      </Text>
      <PageTitle variant="tertiary">rabii luena</PageTitle>
      <br />
      <Heading variant="light">Frontend & Mobile Engineer</Heading>
    </LeftContainer>
  );
};

export default LeftContent;
