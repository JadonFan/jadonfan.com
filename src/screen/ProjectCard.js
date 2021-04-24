import { Card, Label, Button, Icon } from 'semantic-ui-react';

const ProjectCard = ({ title, meta, description, labels, repoUrl, appUrl }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{description ?? 'TODO'}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {labels.map((tech) => (
          <Label content={tech} style={{ marginTop: 3, marginBottom: 3 }} />
        ))}
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
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
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
