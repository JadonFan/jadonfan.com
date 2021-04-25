import { ItemDescription } from 'semantic-ui-react';
import styled from 'styled-components';

export const AnimatableItemDescription = styled(ItemDescription)`
  .ui.move.reveal .hidden.content {
    -webkit-transform: translateX(-100%) !important;
    -ms-transform: translateX(-100%) !important;
    transform: translateX(-100%) !important;
  }

  .ui.move.reveal:hover .hidden.content {
    -webkit-transform: translateX(1%) !important;
    -ms-transform: translateX(1%) !important;
    transform: translateX(1%) !important;
  }

  .ui.move.reveal > .content {
    display: block !important;
  }
`;
