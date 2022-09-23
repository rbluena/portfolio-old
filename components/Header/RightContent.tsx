import { Text } from '@app/components/shared/styles';
import { RightContainer, DescriptionWrapper } from './header.style';

const RightContent = () => {
  return (
    <RightContainer>
      <Text size="xl" variant="primary">
        about me
      </Text>
      <DescriptionWrapper>
        <Text size="medium" variant="light">
          Software engineer building scalable and perfomant frontend and mobile
          applications using cutting-edge tools and technologies.
        </Text>
      </DescriptionWrapper>
    </RightContainer>
  );
};

export default RightContent;
