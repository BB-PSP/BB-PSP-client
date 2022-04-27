import { selectedPositionState } from '@store/Data/atom';
import React, { FC, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { PositionLogo, PositionName, Wrapper } from './styles';

interface Props {
  isclicked: boolean;
  position: {
    name: string;
    colourLogo: string;
    blackLogo: string;
  };
}

const PositionCard: FC<Props> = ({ position, isclicked }) => {
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
  );
  const onClickPosition = useCallback(() => {
    if (selectedPosition.includes(position.name)) {
      setSelectedPosition(selectedPosition.filter((v) => v !== position.name));
    } else {
      setSelectedPosition((prev) => [...prev, position.name]);
    }
  }, [selectedPosition]);
  return (
    <Wrapper onClick={onClickPosition} whileHover={{ scale: 1.05 }}>
      {isclicked ? (
        <PositionLogo alt={position.name} src={position.colourLogo} />
      ) : (
        <PositionLogo alt={position.name} src={position.blackLogo} />
      )}
      <PositionName>{position.name}</PositionName>
    </Wrapper>
  );
};

export default PositionCard;
