import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

import { StyledProps } from '.';

export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${breakpoints.large} {
    width: 22.45vw;
    padding-left: 3.125vw;
  }
  ${breakpoints.medium} {
    width: 23vw;
    padding-left: 6vw;
  }
  ${breakpoints.small} {
    width: 22vw;
    padding-left: 5vw;
  }
`;

export const Name = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.08vw;
    line-height: 4.34vh;
  }
  ${breakpoints.medium} {
    font-size: 2.2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2.5vw;
    line-height: 3vh;
  }
`;

export const Number = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.08vw;
    line-height: 4.34vh;
  }
  ${breakpoints.medium} {
    font-size: 2.2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2.5vw;
    line-height: 3vh;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.large} {
    padding-top: 3.89vh;
    padding-bottom: 3.89vh;
    width: 4.11vw;
    height: 100%;
  }
  ${breakpoints.medium} {
    padding-top: 3.89vh;
    padding-bottom: 3.89vh;
    width: 8vw;
    height: 100%;
  }
  ${breakpoints.small} {
    padding-top: 3vh;
    padding-bottom: 3vh;
    width: 10vw;
    height: 100%;
  }
`;

export const Logo = styled.div<StyledProps>`
  background-image: url(${(props) => '/image/teamLogo/' + props.team + '.png'});
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    background-size: auto 5.37vh;
    width: 100%;
    height: 8vh;
  }
  ${breakpoints.medium} {
    background-size: auto 5vh;
    width: 100%;
    height: 10vh;
  }
  ${breakpoints.small} {
    background-size: auto 3vh;
    width: 100%;
    height: 10vh;
  }
`;

export const TopLine = styled.div`
  width: 0.1rem;
  background-color: #fff;
  ${breakpoints.large} {
    height: 3vh;
    margin-bottom: 1vh;
  }
  ${breakpoints.medium} {
    height: 3vh;
    margin-bottom: 1vh;
  }
  ${breakpoints.small} {
    height: 3vh;
  }
`;

export const BottomLine = styled.div`
  width: 0.1rem;
  background-color: #fff;
  ${breakpoints.large} {
    height: 3vh;
    margin-top: 1vh;
  }
  ${breakpoints.medium} {
    height: 3vh;
    margin-top: 1vh;
  }
  ${breakpoints.small} {
    height: 3vh;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.large} {
    width: 40.1vw;
    padding-top: 2.5vh;
    padding-left: 2.71vw;
  }
  ${breakpoints.medium} {
    width: 55vw;
    padding-top: 3vh;
    padding-left: 2.5vw;
  }
  ${breakpoints.small} {
    width: 58vw;
    padding-top: 2.8vh;
    padding-left: 2vw;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-bottom: 1.57vh;
  }
  ${breakpoints.medium} {
    padding-bottom: 1vh;
  }
  ${breakpoints.small} {
    padding-bottom: 0.5vh;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-right: 2.5vw;
  }
  ${breakpoints.medium} {
    padding-right: 2.5vw;
  }
  ${breakpoints.small} {
    padding-right: 3vw;
  }
`;

export const ContentsTitle = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 1.8vw;
    line-height: 2.8vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 2vh;
  }
`;

export const Contents = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 1.8vw;
    line-height: 2.8vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 2vh;
  }
`;
