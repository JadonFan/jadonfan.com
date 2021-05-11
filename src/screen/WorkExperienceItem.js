import { Item, List, Label, Reveal } from 'semantic-ui-react';
import { AnimatableItemDescription } from '../component/Item';

const WorkExperienceItem = ({
  key,
  imgSrc,
  jobTitle,
  companyName,
  location,
  dateRange,
  performance,
  highlights,
  techs,
}) => {
  return (
    <Item>
      <Item.Image size='small' src={imgSrc} />
      <Item.Content>
        <Item.Header as='h5'>{jobTitle}</Item.Header>
        <Item.Meta content={companyName} />
        <AnimatableItemDescription>
          <Reveal animated='move right'>
            <Reveal.Content visible style={{ width: '100%' }}>
              <List size='large' bulleted>
                {highlights.map((highlight, index) => (
                  <List.Item key={`work-highlight-${index}-${key}`}>
                    {highlight}
                  </List.Item>
                ))}
              </List>
            </Reveal.Content>
            <Reveal.Content hidden style={{ width: '100%' }}>
              <List size='large' relaxed>
                <List.Item icon='marker' content={location} />
                <List.Item icon='calendar' content={dateRange} />
                <List.Item>
                  <List.Icon name='star' verticalAlign='middle' />
                  <List.Content>
                    <List.Header style={{ fontWeight: 'normal' }}>
                      {`${performance} Performance`}
                    </List.Header>
                    <List.Description>
                      based on UWaterloo's co-op{' '}
                      <a
                        href='https://uwaterloo.ca/co-operative-education/your-work-term/work-term-evaluations'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        performance evaluation framework
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Reveal.Content>
          </Reveal>
        </AnimatableItemDescription>
        <Item.Extra>
          {techs.map((tech, index) => (
            <Label key={`work-tech-${index}-${key}`} content={tech} />
          ))}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default WorkExperienceItem;
