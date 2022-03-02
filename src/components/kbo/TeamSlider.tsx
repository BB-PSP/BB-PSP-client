import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import TeamCard from './TeamCard';

const TeamSliderContainer = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  ${breakpoints.large} {
    margin-top: 5.3rem;
    height: 72.2rem;
    width: 133rem;
    overflow: hidden;
  }
  ${breakpoints.medium} {
    margin-top: 5.3rem;
    height: 52.2rem;
    width: 78rem;
    overflow: hidden;
  }
  ${breakpoints.small} {
    margin-top: 5.3rem;
    height: 45.2rem;
    width: 100%;
    overflow: hidden;
  }
`;

const Row = styled(motion.div)`
  cursor: grab;
  display: grid;
  position: absolute;
  bottom: 0;
  ${breakpoints.large} {
    gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    width: 200%;
  }
  ${breakpoints.medium} {
    gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    width: 200%;
  }
  ${breakpoints.small} {
    gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    width: 200%;
    margin-left: 2.5rem;
  }
`;

const SlideBarContainer = styled(motion.div)`
  height: 0.2rem;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  ${breakpoints.large} {
    margin-top: 5rem;
    width: 131rem;
  }
  ${breakpoints.medium} {
    margin-top: 5rem;
    width: 70rem;
  }
  ${breakpoints.small} {
    margin-top: 5rem;
    width: 30rem;
  }
`;

const SlideBar = styled(motion.div)`
  ${breakpoints.large} {
    width: 69rem;
  }
  ${breakpoints.medium} {
    width: 20rem;
  }
  ${breakpoints.small} {
    width: 5rem;
  }
  height: 0.2rem;
  background-color: #3d3d3d;
  position: relative;
`;

export interface ITeamSliderProps {
  teams: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export default function TeamSlider(teams: ITeamSliderProps) {
  const x = useMotionValue(0);
  const teamArr = Object.values(teams);
  const largeSlide = useTransform(x, [0, -1350], [0, 620]);
  const mediumSlide = useTransform(x, [0, -1900], [0, 500]);
  const smallSlide = useTransform(x, [0, -2350], [0, 250]);
  return (
    <>
      <TeamSliderContainer>
        <Large>
          <AnimatePresence>
            <Row
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -1350, right: 0 }}
              dragElastic={0.01}
              dragMomentum={true}
            >
              {teamArr.map((team) => {
                return <TeamCard key={team.name} team={team} />;
              })}
            </Row>
          </AnimatePresence>
        </Large>
        <Medium>
          <AnimatePresence>
            <Row
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -1900, right: 0 }}
              dragElastic={0.01}
              dragMomentum={true}
            >
              {teamArr.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </Row>
          </AnimatePresence>
        </Medium>
        <Small>
          <AnimatePresence>
            <Row
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -2425, right: 0 }}
              dragElastic={0.01}
              dragMomentum={true}
            >
              {teamArr.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </Row>
          </AnimatePresence>
        </Small>
      </TeamSliderContainer>
      <Large>
        <SlideBarContainer>
          <SlideBar style={{ x: largeSlide }} />
        </SlideBarContainer>
      </Large>
      <Medium>
        <SlideBarContainer>
          <SlideBar style={{ x: mediumSlide }} />
        </SlideBarContainer>
      </Medium>
      <Small>
        <SlideBarContainer>
          <SlideBar style={{ x: smallSlide }} />
        </SlideBarContainer>
      </Small>
    </>
  );
}
