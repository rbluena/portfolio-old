import Link from 'next/link';
import { StyledNav, NavItem } from './style';

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <NavItem>
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/work">
            <a>
              <span>Work Experience</span>
            </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">
            <a>
              <span>Projects</span>
            </a>
          </Link>
        </NavItem>
      </ul>
    </StyledNav>
  );
};

export default Nav;
