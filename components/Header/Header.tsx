import Navbar from '@app/components/Navbar';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

import { Wrapper, ContentWrapper } from './header.style';

interface Props {
  showHero: boolean;
}

const Header: React.FC<Props> = ({ showHero }) => (
  <Wrapper>
    <Navbar showHero={showHero} />

    {showHero && (
      <ContentWrapper>
        <LeftContent />
        <RightContent />
      </ContentWrapper>
    )}
  </Wrapper>
);

export default Header;
