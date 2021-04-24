import { useState } from 'react';
import { Header, Menu, Segment } from 'semantic-ui-react';
import { PaneContainer } from '../component/PaneContainer';
import { SubtitleParagraph } from '../component/Paragraph';
import { skills } from '../data/skills';
import BubbleUI from 'react-bubble-ui';
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
  gravitation: 5
};

const bubbleColours = ['#F79256', '#FBD1A2', '#7DCFB6', '#00B2CA', '#1D4E89'];

const SkillPane = () => {
  const [activeItem, setActiveItem] = useState('web');
  const handleItemClick = (_, { name }) => setActiveItem(name);

  return (
    <PaneContainer id="skills">

      <Header as='h2'>Skills</Header>

      <SubtitleParagraph>
        In order to navigate through the bubble layout panel, click on it
        to focus and then either scroll through the panel or press the arrow
        (<kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>) keys.
      </SubtitleParagraph>

      <Menu attached='top' tabular>
        <Menu.Item
          name='web'
          active={activeItem === 'web'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='android'
          active={activeItem === 'android'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='server'
          active={activeItem === 'server'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='other'
          active={activeItem === 'other'}
          onClick={handleItemClick}
        />
      </Menu>

      <Segment attached='bottom'>
        <BubbleUI className="bubbleUI" options={bubbleLayoutOptions}>
          {skills[activeItem].map((skill, index) =>
            <SkillBubble
              key={`skill-bubble-${index}`}
              skill={skill}
              backgroundColor={bubbleColours[Math.floor(Math.random() * bubbleColours.length)]}
            />)
          }
        </BubbleUI>
      </Segment>

    </PaneContainer>
  );
}

export default SkillPane;