import { Wrapper } from './styles';

interface Props {
  color?: string;
}

const HamburgerMenu = ({ color }: Props) => {
  return (
    <Wrapper color={color}>
      <span />
      <span />
    </Wrapper>
  );
};

export default HamburgerMenu;
