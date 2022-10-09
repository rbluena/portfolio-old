import { PageTitle, Heading, Text } from '@app/components/shared/styles';
import {
  ExpoIcon,
  GraphqlIcon,
  JestIcon,
  NextIcon,
  PrismaIcon,
  ReactIcon,
  TypescriptIcon,
} from '~/components/icons';
import { LeftContainer, SkillIcons, IconWrapper } from './header.style';

const LeftContent = () => {
  return (
    <LeftContainer>
      <Text as="span" size="sm" variant="light">
        Hello! Meet
      </Text>
      <PageTitle variant="tertiary">rabii luena</PageTitle>
      <br />
      <Heading variant="light">Frontend & Mobile Engineer</Heading>
      <SkillIcons>
        <IconWrapper>
          <TypescriptIcon />
        </IconWrapper>
        <IconWrapper>
          <ReactIcon />
        </IconWrapper>
        <IconWrapper>
          <NextIcon />
        </IconWrapper>
        <IconWrapper>
          <GraphqlIcon />
        </IconWrapper>
        <IconWrapper>
          <ExpoIcon />
        </IconWrapper>
        <IconWrapper>
          <JestIcon />
        </IconWrapper>
        {/* <IconWrapper>
          <AWSIcon />
        </IconWrapper> */}
        <IconWrapper>
          <PrismaIcon />
        </IconWrapper>
      </SkillIcons>
    </LeftContainer>
  );
};

export default LeftContent;
