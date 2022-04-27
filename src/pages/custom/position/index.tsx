import PageButton from '@button/PageButton';
import position from '@data/position.json';
import CommonLayout from '@layout/common/CommonLayout';
import { selectedPositionState } from '@store/Data/atom';
import { IPosition } from '@store/Types';
import PositionCard from 'components/PositionCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { GridContainer, Wrapper } from './styles';

const imagePreload = (urls: string[]) => {
  urls.map((url) => {
    new Image().src = url;
  });
};

const Position = ({
  positions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
  );
  const colorImages = positions.map(
    (position: IPosition) => position.colourLogo,
  );
  useEffect(() => {
    setSelectedPosition([]);
    imagePreload(colorImages);
  }, []);
  const arr1 = positions.slice(0, 2);
  const arr2 = positions.slice(2, 5);
  const arr3 = positions.slice(5, 7);
  return (
    <>
      <Wrapper>
        <GridContainer>
          {arr1?.map((position: IPosition) => {
            const isclicked = selectedPosition.includes(position.name);
            return (
              <div key={position?.name} className="column2">
                <PositionCard
                  isclicked={isclicked}
                  key={position.name}
                  position={position}
                />
              </div>
            );
          })}
          {arr2?.map((position: IPosition) => {
            const isclicked = selectedPosition.includes(position.name);
            return (
              <div key={position?.name} className="column3">
                <PositionCard
                  isclicked={isclicked}
                  key={position.name}
                  position={position}
                />
              </div>
            );
          })}
          {arr3?.map((position: IPosition) => {
            const isclicked = selectedPosition.includes(position.name);
            return (
              <div key={position?.name} className="column2">
                <PositionCard
                  isclicked={isclicked}
                  key={position.name}
                  position={position}
                />
              </div>
            );
          })}
        </GridContainer>
        <PageButton prev="/custom/team" next="/custom/range" />
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const positions = position?.positionList;
  return {
    props: { positions: positions },
  };
};

Position.PageLayout = CommonLayout;

export default Position;
