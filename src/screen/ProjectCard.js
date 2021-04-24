import { Card, Label, Image, Button, Icon } from 'semantic-ui-react'

const ProjectCard = ({
  imgSrc,
  title,
  meta,
  labels,
  repoUrl
}) => {
    return (
      <Card>
        <Image src={imgSrc} wrapped ui={false} style={{ padding: 30 }} />
        <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
            {meta}
        </Card.Meta>
        <Card.Description>
            TODO
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {labels.map(tech => <Label content={tech} style={{ marginTop: 3, marginBottom: 3 }}/>)}
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Button primary as="a" href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Icon name='github' />
              Source Code
            </Button>
            </div>
        </Card.Content>
      </Card>
    );
}

export default ProjectCard;