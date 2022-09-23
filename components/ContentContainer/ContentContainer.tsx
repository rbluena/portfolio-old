import { Container, Text } from '@app/components/shared/styles';
import { Wrapper, Divider, ContentWrapper } from './styles';

interface Props {
  heading: string;
  subheading?: string;
  children: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({
  heading,
  subheading,
  children,
}) => {
  const splitHeading = heading
    .split(' ')
    .map((word) => `${word} <br />`)
    .join('');

  return (
    <Wrapper>
      <Container>
        <Text
          as="h2"
          size="xl"
          variant="primary"
          dangerouslySetInnerHTML={{ __html: splitHeading }}
        />

        <Divider />

        {subheading && <Text variant="muted">{subheading}</Text>}
      </Container>

      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default ContentContainer;
