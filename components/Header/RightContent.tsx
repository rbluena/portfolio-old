import { Heading, Paragraph } from '../shared/styles';
import { RightContainer } from './header.style';

const RightContent = () => {
  return (
    <RightContainer>
      <Heading size="xl" variant="primary">
        about me
      </Heading>
      <Paragraph size="medium" variant="light">
        Lorem is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Paragraph>
    </RightContainer>
  );
};

export default RightContent;
