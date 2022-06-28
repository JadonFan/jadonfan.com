import { useState } from 'react';
import { Header, Menu, Segment } from 'semantic-ui-react';
import { PaneContainer } from './common/PaneContainer';
import { SubtitleParagraph } from './common/Universal';
import { SkillBubbleUi } from './common/SkillBubble';
import { skills } from '../values/skills';
import SkillBubble from './SkillBubble';
import 'react-bubble-ui/dist/index.css';

const bubbleLayoutOptions = {
  size: 180,
  minSize: 80,
  gutter: 16,
  numCols: 6,
  yRadius: 130,
  xRadius: 220,
  cornerRadius: 50,
  gravitation: 5,
};

const bubbleColours = ['#F79256', '#FBD1A2', '#7DCFB6', '#00B2CA', '#1D4E89'];

const SkillPane = () => {
  const [activeItem, setActiveItem] = useState('web');
  const handleItemClick = (_, { name }) => setActiveItem(name);

  return (
    <PaneContainer id='skills'>
      <Header as='h2'>Skills</Header>

      <SubtitleParagraph>
        In order to navigate through the bubble layout panel, click on it to
        focus and then either scroll through the panel or press the arrow (
        <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) keys.
      </SubtitleParagraph>

      <Menu attached='top' tabular>
        {
          Object.keys(skills).map(key => (
            <Menu.Item
              key={key}
              name={key}
              active={activeItem === key}
              onClick={handleItemClick}
            />
          ))
        }
      </Menu>

      <Segment attached='bottom'>
        <SkillBubbleUi className='bubbleUI' options={bubbleLayoutOptions}>
          {skills[activeItem].map((skill, index) => (
            <SkillBubble
              key={`skill-bubble-${index}-${activeItem}`}
              skill={skill}
              backgroundColor={
                bubbleColours[Math.floor(Math.random() * bubbleColours.length)]
              }
            />
          ))}
        </SkillBubbleUi>
      </Segment>
    </PaneContainer>
  );
};

export default SkillPane;
