import { Item, List, Label } from 'semantic-ui-react';

const WorkExperienceItem = ({
  imgSrc,
  jobTitle,
  companyName,
  highlights,
  techs,
}) => {
  return (
    <Item>
      <Item.Image size='small' src={imgSrc} />
      <Item.Content>
        <Item.Header as='h5'>{jobTitle}</Item.Header>
        <Item.Meta content={companyName} />
        <Item.Description>
          <List bulleted>
            {highlights.map((highlight) => (
              <List.Item>{highlight}</List.Item>
            ))}
          </List>
        </Item.Description>
        <Item.Extra>
          {techs.map((tech) => (
            <Label content={tech} />
          ))}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default WorkExperienceItem;
