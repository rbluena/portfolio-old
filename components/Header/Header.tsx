import Image from 'next/future/image';
import myData from '@app/data/me.json';
import Social from './Social';
import Navbar from '@app/components/Navbar';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

import { Wrapper, ContentWrapper } from './header.style';

const Header: React.FC = () => (
  <Wrapper>
    <Navbar />

    <ContentWrapper>
      <LeftContent />
      <RightContent />
    </ContentWrapper>
  </Wrapper>
);

export default Header;
