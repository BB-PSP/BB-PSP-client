import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import CommonLayout from '../../components/layout/common/CommonLayout';
import PageButton from '../../components/button/PageButton';
import { selectedPositionState } from '../../store/Data/atom';
import { IPosition } from '../../store/Types';
import { breakpoints } from '../../styles/media';
import position from '../../data/position.json';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  ${breakpoints.large} {
    padding-top: 19.63vh;
    grid-template-columns: repeat(3, 1fr);
    height: 46.67vh;
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
`;

const PositionCard = styled(motion.div)<IPosition & { clicked: boolean }>`
  cursor: grab;
  display: flex;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.blackLogo});
  /* ${(props) =>
    props.clicked &&
    css`
      background-color: rgba(183, 0, 0, 0.76);
      background-blend-mode: multiply;
    `} */
  ${(props) =>
    props.clicked
      ? `background-image: url(${props.colourLogo});`
      : `background-image: url(${props.blackLogo});`}
  background-position: center;
  ${breakpoints.large} {
    width: 20.83vw;
    height: 11.11vh;
  }
  ${breakpoints.medium} {
    width: 20.83vw;
    height: 11.11vh;
  }
`;

const PositionName = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  margin: 0 auto;
  ${breakpoints.large} {
    font-size: 1.77vw;
  }
  ${breakpoints.medium} {
    font-size: 1.77vw;
  }
`;

function Position() {
  const positions = position.positionList;
  const redImages = positions.map((position) => position.colourLogo);
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
  );
  function preloadImage(url: string) {
    new Image().src = url;
  }
  useEffect(() => {
    for (let i = 0; i < redImages.length; i++) {
      preloadImage(redImages[i]);
    }
  }, []);
  return (
    <>
      <Wrapper>
        <GridContainer>
          {positions?.map((position: IPosition) => {
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

Position.PageLayout = CommonLayout;

export default Position;
