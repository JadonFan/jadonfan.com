import { Card, Label } from 'semantic-ui-react';
import { CardSpacedDescription } from './common/Card';
import CourseAccordion from './CourseAccordion';

const AcademicCard = ({ term, title, description, courses }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Label color='teal' ribbon>
            {term}
          </Label>
          {title}
        </Card.Header>
        <CardSpacedDescription>
          <p>{description ?? 'TODO'}</p>
        </CardSpacedDescription>
        {courses && <CourseAccordion term={term} courses={courses} />}
      </Card.Content>
    </Card>
  );
};

export default AcademicCard;
