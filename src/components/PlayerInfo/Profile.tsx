import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${breakpoints.large} {
    width: 22.45vw;
    padding-left: 3.125vw;
  }
  ${breakpoints.medium} {
    width: 22rem;
    padding-left: 3rem;
  }
`;

const Name = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.08vw;
    line-height: 4.34vh;
  }
  ${breakpoints.medium} {
    font-size: 2rem;
    line-height: 2.688rem;
  }
`;

const Number = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.08vw;
    line-height: 4.34vh;
  }
  ${breakpoints.medium} {
    font-size: 2rem;
    line-height: 2.688rem;
  }
`;

const LogoBox = styled.div`
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
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    width: 7.9rem;
    height: 100%;
  }
`;

const Logo = styled.div`
  background-image: url('/image/teamLogo/kiwoom.png');
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    background-size: auto 5.37vh;
    width: 100%;
    height: 8vh;
  }
  ${breakpoints.medium} {
    background-size: auto 5.8rem;
    width: 100%;
    height: 5.8rem;
  }
`;

const TopLine = styled.div`
  width: 0.1rem;
  height: 2.69vh;
  background-color: #fff;
  margin-bottom: 0.93vh;
`;

const BottomLine = styled.div`
  width: 0.1rem;
  height: 2.69vh;
  background-color: #fff;
  margin-bottom: 0.93vh;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.large} {
    width: 40.1vw;
    padding-top: 4.54vh;
    padding-left: 2.71vw;
  }
  ${breakpoints.medium} {
    width: 40rem;
    padding-top: 5.9rem;
    padding-left: 2.2rem;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-bottom: 1.57vh;
  }
  ${breakpoints.medium} {
    padding-bottom: 1.7rem;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-right: 2.5vw;
  }
  ${breakpoints.medium} {
    padding-right: 2.5vw;
  }
`;

const ContentsTitle = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
`;

const Contents = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
`;

function Profile() {
  return (
    <>
      <NameBox>
        <Name>페르난데스&nbsp;</Name>
        <Number>#51</Number>
      </NameBox>
      <LogoBox>
        <TopLine />
        <Logo />
        <BottomLine />
      </LogoBox>
      <ProfileContainer>
        <Large>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>L/R</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>185CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>80KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Large>
        <Medium>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>L/R</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>185CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>80KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Medium>
        <Small>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>L/R</Contents>
            </ContentsBox>
          </ProfileBox>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>185CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>80KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Small>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>BIRTH:</ContentsTitle>
            <Contents>1998.08.20</Contents>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>SCHOOL:</ContentsTitle>
            <Contents>선린인고</Contents>
          </ContentsBox>
        </ProfileBox>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>SALARY(2022):</ContentsTitle>
            <Contents>750MILLION KRW</Contents>
          </ContentsBox>
        </ProfileBox>
      </ProfileContainer>
    </>
  );
}

export default Profile;
