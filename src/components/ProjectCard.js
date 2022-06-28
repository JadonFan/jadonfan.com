import { Card, Button, Icon } from 'semantic-ui-react';
import { CardButtonGroup, CardLabel } from './common/Card';

const ProjectCard = ({
  cardName,
  title,
  meta,
  description,
  labels,
  repoUrl,
  appUrl,
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{description ?? 'TODO'}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {labels.map((tech, index) => (
          <CardLabel
            key={`project-card-label-${index}-${cardName}`}
            content={tech}
            style={{ marginTop: 4, marginBottom: 4 }}
          />
        ))}
        <CardButtonGroup>
          <Button.Group>
            <Button
              color='blue'
              as='a'
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon name='github' />
              Source Code
            </Button>
            {appUrl && (
              <Button
                color='teal'
                as='a'
                href={appUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon name='cogs' />
                App
              </Button>
            )}
          </Button.Group>
        </CardButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
