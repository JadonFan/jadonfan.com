import styled from 'styled-components';
import BubbleUI from 'react-bubble-ui';

export const SkillBubbleUi = styled(BubbleUI)`
  width: 100%;
  height: 500px;
  border-radius: 48px;
`;

export const SkillBubbleWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: opacity 0.1s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const SkillBubbleContent = styled.p`
  font-size: 22px;
  margin-bottom: 8px;
  font-weight: 1000;
  max-width: 152px;
  text-align: center;
  color: white;
`;
