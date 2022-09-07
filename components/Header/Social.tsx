import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { RiDribbbleLine } from 'react-icons/ri';
import { Social as StyledSocial } from './header.style';

const Social = () => {
  return (
    <StyledSocial>
      <a
        href="https://linkedin.com/in/rbluena"
        aria-label="visit linkedin profile"
      >
        <FiLinkedin />
      </a>
      <a href="https://github.com/rbluena" aria-label="visit github profile">
        <FiGithub />
      </a>
      <a href="https://twiitter.com/rbluena" aria-label="visit twitter account">
        <FiTwitter />
      </a>
      <a
        href="https://dribbble.com/rbluena"
        aria-label="visit dribbble account"
      >
        <RiDribbbleLine />
      </a>
    </StyledSocial>
  );
};

export default Social;
