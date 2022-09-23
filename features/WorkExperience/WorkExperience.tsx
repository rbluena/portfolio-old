import { useState } from 'react';
import { Text } from '@app/components/shared/styles';
import { Wrapper, ContentWrapper, Description, Tabs } from './styles';

import workData from '@app/data/work.json';

const WorkExperience = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | null>('bejamas');

  const workEntries = Object.entries(workData.data);

  return (
    <Wrapper>
      <Tabs.List role="tablist">
        {workEntries.map(([key, item]) => {
          const contentKey = key.toLowerCase();
          const isActive = activeTabKey?.toLocaleLowerCase() === contentKey;

          return (
            <Tabs.Nav key={contentKey} role="presentation" isActive={isActive}>
              <button
                onClick={() => setActiveTabKey(contentKey)}
                key={key}
                role="presentation"
              >
                {item.company}
              </button>
            </Tabs.Nav>
          );
        })}
      </Tabs.List>

      <ContentWrapper>
        {workEntries.map(([key, item]) => {
          const contentKey = key.toLowerCase();

          return (
            <Tabs.Content
              key={contentKey}
              isActive={activeTabKey?.toLocaleLowerCase() === contentKey}
            >
              <Text size="lg" variant="primary">
                {item.position}
              </Text>
              <Text size="sm" variant="muted">
                {item.from}-{item.to}
              </Text>

              {item?.description.map((text: string, index: number) => {
                return <Description key={index}>{text}</Description>;
              })}
            </Tabs.Content>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default WorkExperience;
