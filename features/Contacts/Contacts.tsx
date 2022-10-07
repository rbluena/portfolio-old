import {
  RiGithubLine,
  RiLinkedinLine,
  RiPhoneLine,
  RiTwitterLine,
} from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Text } from '@app/components/shared/styles';
import { Wrapper, DirectContacts, Social } from './styles';

interface Props {
  phone: string;
  email: string;
  social: {
    twitter: {
      handle: string;
      url: string;
    };
    github: {
      handle: string;
      url: string;
    };
    linkedIn: {
      handle: string;
      url: string;
    };
  };
}

const Contacts: React.FunctionComponent<Props> = ({ phone, email, social }) => {
  return (
    <Wrapper>
      <DirectContacts>
        <li>
          <RiPhoneLine size={32} />
          &nbsp;
          <Text size="medium" variant="primary">
            {phone}
          </Text>
        </li>
        <li>
          <HiOutlineMail fontSize={32} />
          &nbsp;
          <Text size="medium" variant="primary">
            {email}
          </Text>
        </li>
      </DirectContacts>

      <Social>
        <li>
          <RiGithubLine size={24} fontSize={24} />
          <a href={social.github.url}>&nbsp;{social?.github.handle}</a>
        </li>
        <li>
          <RiLinkedinLine size={24} fontSize={24} />
          <a href={social.linkedIn.url}>&nbsp;{social.linkedIn.handle}</a>
        </li>
        <li>
          <RiTwitterLine size={24} />
          <a href={social.twitter.url}>&nbsp;{social.twitter.handle}</a>
        </li>
      </Social>
    </Wrapper>
  );
};

export default Contacts;
