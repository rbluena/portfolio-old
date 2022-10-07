import Navbar from '@app/components/Navbar';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

import { Wrapper, Hero } from './header.style';

interface Props {
  showHero: boolean;
}

const Header: React.FC<Props> = ({ showHero }) => (
  <Wrapper>
    <Navbar showHero={showHero} />

    {showHero && (
      <Hero>
        <LeftContent />
        <RightContent />
      </Hero>
    )}
  </Wrapper>
);

export default Header;
