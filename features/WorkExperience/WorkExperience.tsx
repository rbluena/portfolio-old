import { useState } from 'react';
import { Text } from '@app/components/shared/styles';
import {
  Wrapper,
  ContentWrapper,
  Description,
  Tabs,
  SubheadingSection,
} from './styles';

import workData from '@app/data/work.json';

const WorkExperience = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | null>('bejamas');
  const workEntries = Object.entries(workData.data);

  return (
    <Wrapper>
      <Tabs.List role="tablist">
        {workEntries.map(([key, item], index) => {
          const contentKey = key.toLowerCase();
          const isActive = activeTabKey?.toLocaleLowerCase() === contentKey;

          return (
            <Tabs.NavItem
              key={contentKey}
              role="tab"
              isActive={isActive}
              aria-posinset={index}
              aria-selected={isActive}
              aria-controls={key}
            >
              <button
                type="button"
                onClick={() => setActiveTabKey(contentKey)}
                key={key}
              >
                {item.company}
              </button>
            </Tabs.NavItem>
          );
        })}
      </Tabs.List>

      <ContentWrapper>
        {workEntries.map(([key, item]) => {
          const contentKey = key.toLowerCase();
          const isActivePanel =
            activeTabKey?.toLocaleLowerCase() === contentKey;

          return (
            <Tabs.Content
              id={key}
              key={contentKey}
              isActive={isActivePanel}
              aria-hidden={!isActivePanel}
              role="tabpanel"
            >
              <Text size="lg" variant="primary">
                {item.position}
              </Text>
              <SubheadingSection>
                <Text size="sm">
                  <strong>
                    {item.from}-{item.to}
                  </strong>
                </Text>
                <div className="divider" />
                <Text variant="muted" size="sm">
                  {item.location}
                </Text>
              </SubheadingSection>

              <Description>
                {item?.description.map((text, index) => {
                  return (
                    <li key={index}>
                      <Text as="span">{text}</Text>
                    </li>
                  );
                })}
              </Description>
            </Tabs.Content>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default WorkExperience;
