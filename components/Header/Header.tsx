import Image from 'next/future/image';
import myData from '@app/data/me.json';
import Social from './Social';

import { Wrapper, Container, Title, Heading } from './header.style';

const Header: React.FC = () => (
  <Wrapper>
    <div>
      <Image
        src="/images/blob.svg"
        alt="cover background"
        width={500}
        height={500}
        priority
      />
    </div>
    <Container>
      <Title>{myData.name}</Title>
      <Heading>{myData.description}</Heading>
      <Social />
    </Container>
  </Wrapper>
);

export default Header;
