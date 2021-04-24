import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const CarouselNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const CarouselButton = styled(Button)`
  margin${(props) =>
    props.floated.charAt(0).toUpperCase() + props.floated.slice(1)}: 0;
`;

export const CarouselBubbles = styled.span``;

export const CarouselBubble = styled.div`
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-right: 10px;
`;
