import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import Logo from '~/components/Logo';
// import HamburgerMenu from '~/components/HamburgerMenu';
// import Nav from '~/components/Nav';
import { Wrapper, Container, ScrollProgress } from './styles';

interface Props {
  showHero: boolean;
}

const Navbar: React.FC<Props> = ({ showHero }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 370) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <Wrapper
      style={
        isScrolled || !showHero
          ? { background: 'white' }
          : { background: 'transparent', boxShadow: 'none' }
      }
    >
      <ScrollProgress
        as={motion.div}
        style={{
          scaleX: scrollYProgress,
          backgroundColor: isScrolled ? '#03045E' : 'white',
        }}
      />
      <Container>
        <Link href="/">
          <Logo color={isScrolled || !showHero ? '#03045E' : 'white'} />
        </Link>

        {/* <HamburgerMenu color={isScrolled || !showHero ? '#03045E' : 'white'} /> */}
      </Container>

      {/* <Nav /> */}
    </Wrapper>
  );
};

export default Navbar;
