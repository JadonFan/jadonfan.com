import { Fragment, useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

const CourseAccordion = ({ term, courses }) => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const handleClick = (_, titleProps) => {
    const { index } = titleProps;
    if (activeIndices.has(index)) {
      activeIndices.delete(index);
    } else {
      activeIndices.add(index);
    }
    setActiveIndices(new Set(activeIndices));
  };

  return (
    <Accordion fluid styled exclusive={false}>
      {courses.map((course, index) => (
        <Fragment key={`course-accordion-item-${index}-${term}`}>
          <Accordion.Title
            active={activeIndices.has(index)}
            index={index}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            {course.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndices.has(index)}>
            <p>{course.description}</p>
          </Accordion.Content>
        </Fragment>
      ))}
    </Accordion>
  );
};

export default CourseAccordion;
