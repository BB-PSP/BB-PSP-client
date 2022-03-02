import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchPositions } from '../../hooks/api/usePositions';
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
  }
  ${breakpoints.medium} {
    width: 68rem;
  }
  ${breakpoints.small} {
    width: 35rem;
  }
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 21.2rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 5.2rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-top: 8.7rem;
    padding-bottom: 2.2rem;
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
  ${breakpoints.large} {
    margin-top: 5.4rem;
  }
  ${breakpoints.medium} {
    margin-top: 5.4rem;
  }
  ${breakpoints.small} {
    margin-top: 8rem;
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
    width: 8.35rem;
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
    width: 8.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

export default function Position() {
  const { data } = useQuery('positionData', () => fetchPositions());
  const positions = data?.positionList;
  const [selectedPosition, setSelectedPosition] = useState<string[]>([]);
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
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
              name={position.name}
              colourLogo={position.colourLogo}
              blackLogo={position.blackLogo}
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
        <Link href="/custom/range">
          <NextButtonText>
            next
            <ArrowImg src="/image/Arrow.png" alt="화살표" />
          </NextButtonText>
        </Link>
      </ButtonContainer>
    </Wrapper>
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
