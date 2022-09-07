import myData from '@app/data/me.json';
import Social from './Social';

import { Wrapper, Container, Title, Heading } from './header.style';

const Header: React.FC = () => (
  <Wrapper>
    <Container>
      <Title>{myData.name}</Title>
      <Heading>{myData.description}</Heading>
      <Social />
    </Container>
  </Wrapper>
);

export default Header;
