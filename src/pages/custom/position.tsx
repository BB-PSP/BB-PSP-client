import PageButton from '@button/PageButton';
import position from '@data/position.json';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { selectedPositionState } from '@store/Data/atom';
import { IPosition } from '@store/Types';
import { breakpoints } from '@styles/media';
import PositionCard from 'components/PositionCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  ${breakpoints.large} {
    padding-top: 5vh;
    column-gap: 1vw;
    row-gap: 6vh;
    .column2 {
      margin-left: 10vw;
      grid-column: span 3;
    }
    .column3 {
      margin-left: 3vw;
      grid-column: span 2;
    }
  }
  ${breakpoints.medium} {
    padding-top: 8vh;
    column-gap: 5vw;
    row-gap: 3vh;
    .column2 {
      margin-left: 7vw;
      grid-column: span 3;
    }
    .column3 {
      grid-column: span 2;
    }
  }
  ${breakpoints.small} {
    height: 50vh;
    row-gap: 5vh;
    grid-template-columns: repeat(1, 1fr);
    overflow-y: scroll;
  }
`;

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
