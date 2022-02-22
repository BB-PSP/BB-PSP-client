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
  ${breakpoints.large} {
    margin-top: 5.3rem;
    height: 72.2rem;
    width: 133rem;
    overflow: hidden;
  }
  ${breakpoints.medium} {
    margin-top: 5.3rem;
    height: 72.2rem;
    width: 133rem;
    overflow: hidden;
  }
  ${breakpoints.small} {
    margin-top: 5.3rem;
    height: 40.2rem;
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
  ${breakpoints.large} {
    margin-top: 5rem;
    width: 131rem;
  }
  ${breakpoints.medium} {
    margin-top: 5rem;
    width: 131rem;
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
    width: 69rem;
  }
  ${breakpoints.small} {
    width: 5rem;
  }
  height: 0.2rem;
  background-color: #3d3d3d;
  position: relative;
`;

export default function TeamSlider() {
  const x = useMotionValue(0);
  const largeSlide = useTransform(x, [0, -1350], [0, 620]);
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
              {Team.map((team) => (
                <TeamCard key={team.id} />
              ))}
            </Row>
          </AnimatePresence>
        </Large>
        <Medium>
          <AnimatePresence>
            <Row
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -1350, right: 0 }}
              dragElastic={0.01}
              dragMomentum={true}
            >
              {Team.map((team) => (
                <TeamCard key={team.id} />
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
              {Team.map((team) => (
                <TeamCard key={team.id} />
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
          <SlideBar style={{ x: 300 }} />
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

const Team = [
  {
    id: 1,
    name: 'samsung lions',
  },
  {
    id: 2,
    name: 'kiwoom heroes',
  },
  {
    id: 3,
    name: 'lg twins',
  },
  {
    id: 4,
    name: 'kia tigers',
  },
  {
    id: 5,
    name: 'doosan bears',
  },
  {
    id: 6,
    name: 'hanhwa eagles',
  },
  {
    id: 7,
    name: 'ssg landers',
  },
  {
    id: 8,
    name: 'kt wiz',
  },
  {
    id: 9,
    name: 'nc dinos',
  },
  {
    id: 10,
    name: 'lotte giants',
  },
];
