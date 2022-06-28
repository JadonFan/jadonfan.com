import {
  SkillBubbleWrapper,
  SkillBubbleContent,
} from './common/SkillBubble';

const SkillBubble = ({ backgroundColor, skill }) => {
  return (
    <SkillBubbleWrapper style={{ backgroundColor }}>
      <SkillBubbleContent>{skill}</SkillBubbleContent>
    </SkillBubbleWrapper>
  );
};

export default SkillBubble;
