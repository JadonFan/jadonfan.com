import { Header, Popup, Segment, Statistic } from 'semantic-ui-react';
import { PaneContainer } from '../component/PaneContainer';
import AcademicCard from './AcademicCard';
import { academicStatistics, academicTerms } from '../data/academics';

const AcademicPane = () => {
  return (
    <PaneContainer id='academics'>
      <Header as='h2'>Academics</Header>
      <Segment inverted>
        <Statistic.Group size='small' inverted>
          {academicStatistics.map((stat) => (
            <Popup
              trigger={
                <Statistic key={stat.key}>
                  <Statistic.Value>{stat.value}</Statistic.Value>
                  <Statistic.Label>{stat.label}</Statistic.Label>
                </Statistic>
              }
              content={stat.description}
              position='top center'
            />
          ))}
        </Statistic.Group>
      </Segment>
      {academicTerms.map((academicTerm, index) => (
        <AcademicCard key={`academic-card-${index}`} {...academicTerm} />
      ))}
    </PaneContainer>
  );
};

export default AcademicPane;
