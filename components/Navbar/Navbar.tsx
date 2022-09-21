import Logo from '@app/components/Logo';
import HamburgerMenu from '@app/components/HamburgerMenu';
import { Wrapper, Container } from './styles';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <HamburgerMenu />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
