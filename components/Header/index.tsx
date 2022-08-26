import { useState } from 'react';
import Switcher from 'react-switch';
import { Wrapper } from './header.style';

const Header = () => {
  const [themeSwitch, setThemeSwitch] = useState(false);

  return (
    <Wrapper>
      <h2>Home</h2>
      <Switcher
        onChange={() => setThemeSwitch(!themeSwitch)}
        checked={themeSwitch}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        // onColor=""
        // offColor=""
      />
    </Wrapper>
  );
};

export default Header;
