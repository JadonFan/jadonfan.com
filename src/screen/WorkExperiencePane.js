import { Header, Item } from 'semantic-ui-react';
import { PaneContainer } from '../component/PaneContainer';
import WorkExperienceItem from './WorkExperienceItem';
import { workExperiences as experiences } from '../data/workExperiences';

const WorkExperiencePane = () => {
  return (
    <PaneContainer id='experience'>
      <Header as='h2'>Work Experience</Header>
      <Item.Group relaxed>
        {experiences.map((experience) => (
          <WorkExperienceItem
            {...experience}
            key={`work-experience-item-${experience.key}`}
            itemName={`work-experience-item-${experience.key}`}
          />
        ))}
      </Item.Group>
    </PaneContainer>
  );
};

export default WorkExperiencePane;
