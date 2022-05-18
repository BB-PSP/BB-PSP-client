import React, { FC } from 'react';

import { PositionLogo, PositionName, Wrapper } from './styles';

interface Props {
  position: {
    name: string;
    colourLogo: string;
    blackLogo: string;
  };
}

const PositionSelectCard: FC<Props> = ({ position }) => {
  return (
    <Wrapper whileHover={{ scale: 1.05 }}>
      <PositionLogo alt={position?.name} src={position?.blackLogo} />
      <PositionName>{position?.name}</PositionName>
    </Wrapper>
  );
};

export default PositionSelectCard;
