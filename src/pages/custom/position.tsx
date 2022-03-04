import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import CommonLayout from '../../components/layout/CommonLayout';
import { fetchPositions } from '../../hooks/api/usePositions';
import { selectedPositionState } from '../../store/Data/atom';
import { IPosition } from '../../store/Types';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 39.6rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 24.6rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 12.8rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  ${breakpoints.large} {
    grid-template-columns: repeat(3, 1fr);
    height: 50.4rem;
    column-gap: 4rem;
    row-gap: 7.2rem;
  }
  ${breakpoints.medium} {
    grid-template-columns: repeat(3, 1fr);
    height: 50.4rem;
    column-gap: 2rem;
    row-gap: 3.8rem;
  }
  ${breakpoints.small} {
    grid-template-columns: repeat(2, 1fr);
    height: 39.8rem;
    column-gap: 2rem;
    row-gap: 3.8rem;
  }
`;

const PositionCard = styled(motion.div)<IPosition & { clicked: boolean }>`
  cursor: grab;
  display: flex;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) =>
    props.clicked
      ? `background-image: url(${props.colourLogo});`
      : `background-image: url(${props.blackLogo});`}
  background-position: center;
  ${breakpoints.large} {
    width: 40rem;
    height: 12rem;
  }
  ${breakpoints.medium} {
    width: 20rem;
    height: 10rem;
  }
  ${breakpoints.small} {
    width: 15.7rem;
    height: 6.5rem;
  }
`;

const PositionName = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  margin: 0 auto;
  ${breakpoints.large} {
    font-size: 3.4rem;
  }
  ${breakpoints.medium} {
    font-size: 2rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    bottom: 7.1rem;
  }
  ${breakpoints.medium} {
    bottom: 3.1rem;
  }
  ${breakpoints.small} {
    bottom: 1rem;
  }
`;

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 106.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 46.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
    margin-left: 20.5rem;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  text-align: right;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
  }
`;

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

function Position() {
  const { data } = useQuery('positionData', () => fetchPositions());
  const positions = data?.positionList;
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
  );
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
        <ButtonContainer>
          <Link href="/custom/team">
            <PrevButtonText>
              prev
              <ReversedArrowImg src="/image/Arrow.png" alt="화살표" />
            </PrevButtonText>
          </Link>
          <Link href="/custom/result">
            <NextButtonText>
              next
              <ArrowImg src="/image/Arrow.png" alt="화살표" />
            </NextButtonText>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('positionData', () => fetchPositions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Position.PageLayout = CommonLayout;

export default Position;
