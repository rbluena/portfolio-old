import { Text } from '~/components/shared/styles';
import { Wrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper as="footer">
      <Text variant="light">
        © 2022 <strong>Rabii Luena</strong>. All rights reserved.
      </Text>
    </Wrapper>
  );
};

export default Footer;
