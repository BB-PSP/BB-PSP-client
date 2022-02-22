import TeamCard from '../../components/kbo/TeamCard';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { Large, Medium, Small } from '../../styles/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.small} {
    align-items: flex-start;
  }
`;

const Subtitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.small} {
    margin: 0 auto;
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 10.7rem;
  }
`;

const Slider = styled.div``;

const TeamSlider = styled.div`
  position: relative;
  ${breakpoints.large} {
    margin-top: 5.3rem;
    height: 72.2rem;
    width: 133rem;
  }
  ${breakpoints.medium} {
    margin-top: 5.3rem;
    height: 72.2rem;
    width: 133rem;
  }
  ${breakpoints.small} {
    left: 7rem;
    margin-top: 5.3rem;
    height: 40.2rem;
    width: 133rem;
  }
  overflow: hidden;
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
    width: 100%;
  }
`;

const SlideBarContainer = styled(motion.div)`
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
  }
  height: 0.2rem;
  background-color: #fff;
`;

const SlideBar = styled(motion.div)`
  ${breakpoints.large} {
    width: 69rem;
  }
  ${breakpoints.medium} {
    width: 69rem;
  }
  ${breakpoints.small} {
    width: 10rem;
  }
  height: 0.2rem;
  background-color: #3d3d3d;
  position: relative;
`;

export default function Kbo() {
  const slideBarConstraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const largeSlide = useTransform(x, [0, -1350], [0, 620]);
  // const smallSlide = useTransform(x)
  return (
    <Wrapper>
      <Subtitle>choose professional team</Subtitle>
      <Slider>
        <TeamSlider>
          <AnimatePresence>
            <Large>
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
            </Large>
            <Medium>
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
            </Medium>
            <Small>
              <Row
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -1850, right: 475 }}
                dragElastic={0.01}
                dragMomentum={true}
              >
                {Team.map((team) => (
                  <TeamCard key={team.id} />
                ))}
              </Row>
            </Small>
          </AnimatePresence>
        </TeamSlider>
        <SlideBarContainer ref={slideBarConstraintsRef}>
          <SlideBar style={{ x: largeSlide }} />
        </SlideBarContainer>
      </Slider>
    </Wrapper>
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
