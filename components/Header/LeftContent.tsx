import { Text } from '@app/components/shared/styles';
import { LeftContainer } from './header.style';

const LeftContent = () => {
  return (
    <LeftContainer>
      <Text as="span" size="sm" variant="light">
        Hello! Meet
      </Text>
      <Text as="h1" size="xxl" variant="tertiary">
        rabii luena
      </Text>
      <br />
      <Text size="xl" variant="light">
        Frontend & <br />
        Mobile Engineer
      </Text>
    </LeftContainer>
  );
};

export default LeftContent;
