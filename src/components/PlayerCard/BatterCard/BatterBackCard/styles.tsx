import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

import { StyledProps } from '../BatterFrontCard';

export const Wrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${(props) =>
    props.team === 'Twins'
      ? '#BE0737'
      : props.team === 'Wiz'
      ? '#000000'
      : props.team === 'Bears'
      ? '#110F29'
      : props.team === 'Lions'
      ? '#005ABC'
      : props.team === 'Heroes'
      ? '#97334A'
      : props.team === 'Landers'
      ? '#221815'
      : props.team === 'Dinos'
      ? '#C8A17A'
      : props.team === 'Giants'
      ? '#052956'
      : props.team === 'Tigers'
      ? '#D41F1F'
      : props.team === 'Eagles'
      ? '#EF701F'
      : '#221815'};
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
  ${breakpoints.large} {
    z-index: 2;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 15.1vw;
    height: 15vh;
    border-radius: 0.4rem;
    padding-top: 1.39vh;
    padding-bottom: 1.9vh;
  }
  ${breakpoints.medium} {
    width: 40vw;
    height: 20vh;
    border-radius: 0.4rem;
    padding-top: 1.39vh;
    padding-bottom: 1.9vh;
  }
`;

export const LogoBox = styled.div<StyledProps>`
  background-image: url(${(props) => '/image/teamLogo/' + props.team + '.png'});
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    width: 100%;
    height: 3.43vh;
    background-size: auto 3.43vh;
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 7vh;
    background-size: auto 5vh;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.74vh 1.3vw 0 1.3vw;
  padding-bottom: 0.56vh;
  border-bottom: 1px solid #fff;
`;

export const Name = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

export const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    width: 6.5vw;
  }
  ${breakpoints.medium} {
    width: 9vw;
  }
`;

export const Position = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

export const Birthday = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1.2vw;
    line-height: 2vh;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.48vh 1.53vw 0 1.53vw;
  ${breakpoints.large} {
    height: 4.03vh;
  }
`;

export const HitBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 0.99vw;
  }
`;

export const HRBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 0.78vw;
  }
`;

export const RBIBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 1.15vw;
  }
`;

export const AVGBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${breakpoints.large} {
    width: 1.61vw;
  }
`;

export const StatName = styled.h3`
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.63vw;
    line-height: 1.48vh;
  }
  ${breakpoints.medium} {
    font-size: 1vw;
    line-height: 2vh;
  }
`;

export const Stat = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #d6d6d6;
  text-align: center;
  ${breakpoints.large} {
    padding-top: 1.34vh;
    font-size: 0.52vw;
    line-height: 1.2vh;
  }
  ${breakpoints.medium} {
    padding-top: 2vh;
    font-size: 1vw;
    line-height: 2vh;
  }
`;
