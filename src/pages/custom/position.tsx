import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import CommonLayout from '@layout/common/CommonLayout';
import PageButton from '@button/PageButton';
import { selectedPositionState } from '@store/Data/atom';
import { IPosition } from '@store/Types';
import { breakpoints } from '@styles/media';
import position from '../../data/position.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

const GridContainer = styled.div`
  display: grid;
  ${breakpoints.large} {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 5vh;
    /* height: 46.67vh; */
    column-gap: 2.08vw;
    row-gap: 6.67vh;
  }
  ${breakpoints.medium} {
    padding-top: 20vh;
    grid-template-columns: repeat(3, 1fr);
    height: 50vh;
    column-gap: 2.6vw;
    row-gap: 5vh;
  }
  ${breakpoints.small} {
    padding-top: 20vh;
    grid-template-columns: repeat(2, 1fr);
    height: 50vh;
    column-gap: 2.6vw;
    row-gap: 1vh;
  }
`;

const GridContainer2 = styled.div`
  display: grid;
  ${breakpoints.large} {
    grid-template-columns: repeat(3, 1fr);
    padding-top: 5vh;
    column-gap: 2.08vw;
    row-gap: 6.67vh;
  }
  ${breakpoints.medium} {
    padding-top: 20vh;
    grid-template-columns: repeat(3, 1fr);
    height: 50vh;
    column-gap: 2.6vw;
    row-gap: 5vh;
  }
  ${breakpoints.small} {
    padding-top: 20vh;
    grid-template-columns: repeat(2, 1fr);
    height: 50vh;
    column-gap: 2.6vw;
    row-gap: 1vh;
  }
`;

const PositionCard = styled(motion.div)<{ clicked: boolean }>`
  position: relative;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${breakpoints.large} {
    width: 20.83vw;
    height: 11.11vh;
  }
  ${breakpoints.medium} {
    width: 20.83vw;
    height: 11.11vh;
  }
  ${breakpoints.small} {
    width: 25vw;
    height: auto;
  }
`;

const PositionLogo = styled.img`
  ${breakpoints.large} {
    width: 100%;
    height: 100%;
  }
  ${breakpoints.medium} {
    width: 100%;
    height: auto;
  }
  ${breakpoints.small} {
    width: 100%;
    height: auto;
  }
`;

const PositionName = styled.h2`
  position: absolute;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.77vw;
  }
  ${breakpoints.medium} {
    font-size: 1.3vw;
  }
  ${breakpoints.small} {
    font-size: 2vw;
  }
`;

function imagePreload(urls: string[]) {
  urls.map((url) => {
    new Image().src = url;
  });
}

function Position({
  positions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const colorImages = positions.map(
    (position: IPosition) => position.colourLogo,
  );
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
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
            const isClicked = selectedPosition.includes(position.name);
            return (
              <PositionCard
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (selectedPosition.includes(position.name)) {
                    setSelectedPosition(
                      selectedPosition.filter((v) => v !== position.name),
                    );
                  } else {
                    setSelectedPosition((prev) => [...prev, position.name]);
                  }
                }}
                clicked={isClicked}
                key={position.name}
                {...position}
              >
                {isClicked ? (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.colourLogo}
                  />
                ) : (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.blackLogo}
                  />
                )}
                <PositionName>{position?.name}</PositionName>
              </PositionCard>
            );
          })}
        </GridContainer>
        <GridContainer2>
          {arr2?.map((position: IPosition) => {
            const isClicked = selectedPosition.includes(position.name);
            return (
              <PositionCard
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (selectedPosition.includes(position.name)) {
                    setSelectedPosition(
                      selectedPosition.filter((v) => v !== position.name),
                    );
                  } else {
                    setSelectedPosition((prev) => [...prev, position.name]);
                  }
                }}
                clicked={isClicked}
                key={position.name}
                {...position}
              >
                {isClicked ? (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.colourLogo}
                  />
                ) : (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.blackLogo}
                  />
                )}
                <PositionName>{position?.name}</PositionName>
              </PositionCard>
            );
          })}
        </GridContainer2>
        <GridContainer>
          {arr3?.map((position: IPosition) => {
            const isClicked = selectedPosition.includes(position.name);
            return (
              <PositionCard
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (selectedPosition.includes(position.name)) {
                    setSelectedPosition(
                      selectedPosition.filter((v) => v !== position.name),
                    );
                  } else {
                    setSelectedPosition((prev) => [...prev, position.name]);
                  }
                }}
                clicked={isClicked}
                key={position.name}
                {...position}
              >
                {isClicked ? (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.colourLogo}
                  />
                ) : (
                  <PositionLogo
                    alt={`${position?.name} Logo`}
                    src={position?.blackLogo}
                  />
                )}
                <PositionName>{position?.name}</PositionName>
              </PositionCard>
            );
          })}
        </GridContainer>
        <PageButton prev="/custom/team" next="/custom/range" />
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const positions = position?.positionList;
  return {
    props: { positions: positions },
  };
};

Position.PageLayout = CommonLayout;

export default Position;
