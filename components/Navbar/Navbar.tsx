import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Logo from '@app/components/Logo';
import HamburgerMenu from '@app/components/HamburgerMenu';
import { Wrapper, Container, ScrollProgress } from './styles';

const Navbar = () => {
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
  }, []);

  return (
    <Wrapper
      style={
        isScrolled
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
        <Logo color={isScrolled ? '#03045E' : 'white'} />
        <HamburgerMenu color={isScrolled ? '#03045E' : 'white'} />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
