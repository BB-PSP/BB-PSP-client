import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${breakpoints.large} {
    width: 20vw;
    height: 11vh;
  }
  ${breakpoints.medium} {
    width: 25vw;
    height: 11vh;
  }
  ${breakpoints.small} {
    width: 35vw;
    height: 11vh;
  }
`;

export const PositionLogo = styled.img`
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

export const PositionName = styled.h2`
  position: absolute;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.77vw;
  }
  ${breakpoints.medium} {
    font-size: 2.2vw;
  }
  ${breakpoints.small} {
    font-size: 3.3vw;
  }
`;
