import { SkillBubbleWrapper, SkillBubbleContent } from "../component/SkillBubble";

const SkillBubble = ({
  backgroundColor,
  skill,
}) => {
  return (
    <SkillBubbleWrapper style={{ backgroundColor }}>
      <SkillBubbleContent>
        {skill}
      </SkillBubbleContent>
    </SkillBubbleWrapper>
  );
}

export default SkillBubble;
