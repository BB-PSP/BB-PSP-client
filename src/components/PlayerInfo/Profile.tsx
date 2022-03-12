import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import { Large, Medium, Small } from '../../styles/MediaQuery';

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${breakpoints.large} {
    width: 43.1rem;
    padding-left: 6rem;
  }
  ${breakpoints.medium} {
    width: 22rem;
    padding-left: 3rem;
  }
  ${breakpoints.small} {
    width: 10rem;
    justify-content: center;
  }
`;

const Name = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 4rem;
    line-height: 4.688rem;
  }
  ${breakpoints.medium} {
    font-size: 2rem;
    line-height: 2.688rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 2.288rem;
  }
`;

const Number = styled.h2`
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 4rem;
    line-height: 4.688rem;
  }
  ${breakpoints.medium} {
    font-size: 2rem;
    line-height: 2.688rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 2.288rem;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.large} {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    width: 7.9rem;
    height: 100%;
  }
  ${breakpoints.medium} {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    width: 7.9rem;
    height: 100%;
  }
  ${breakpoints.small} {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    width: 4rem;
    height: 100%;
  }
`;

const Logo = styled.div`
  background-image: url('/image/teamLogo/kiwoom.png');
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    background-size: auto 5.8rem;
    width: 100%;
    height: 5.8rem;
  }
  ${breakpoints.medium} {
    background-size: auto 5.8rem;
    width: 100%;
    height: 5.8rem;
  }
  ${breakpoints.small} {
    background-size: 4rem auto;
    width: 4rem;
    height: 5.8rem;
  }
`;

const TopLine = styled.div`
  width: 0.1rem;
  height: 2.9rem;
  background-color: #fff;
  margin-bottom: 1rem;
`;

const BottomLine = styled.div`
  width: 0.1rem;
  height: 2.9rem;
  background-color: #fff;
  margin-top: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.large} {
    width: 77rem;
    padding-top: 4.9rem;
    padding-left: 5.2rem;
  }
  ${breakpoints.medium} {
    width: 40rem;
    padding-top: 5.9rem;
    padding-left: 2.2rem;
  }
  ${breakpoints.small} {
    width: 21rem;
    padding-top: 3rem;
    padding-left: 1rem;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-bottom: 1.7rem;
  }
  ${breakpoints.medium} {
    padding-bottom: 1.7rem;
  }
  ${breakpoints.small} {
    padding-bottom: 1.2rem;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  ${breakpoints.large} {
    padding-right: 4.8rem;
  }
  ${breakpoints.medium} {
    padding-right: 2.4rem;
  }
  ${breakpoints.small} {
    padding-right: 1.2rem;
  }
`;

const ContentsTitle = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.901rem;
  }
  ${breakpoints.medium} {
    font-size: 1.6rem;
    line-height: 1.901rem;
  }
  ${breakpoints.small} {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
`;

const Contents = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.901rem;
  }
  ${breakpoints.medium} {
    font-size: 1.6rem;
    line-height: 1.901rem;
  }
  ${breakpoints.small} {
    font-size: 0.8rem;
    line-height: 1.5rem;
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
