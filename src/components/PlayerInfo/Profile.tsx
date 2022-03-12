import styled from 'styled-components';

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 43.1rem;
  padding-left: 6rem;
`;

const Name = styled.h2`
  font-family: 'RobotoBoldItalic';
  font-size: 4rem;
  line-height: 4.688rem;
  color: #fff;
`;

const Number = styled.h2`
  font-family: 'RobotoBoldItalic';
  font-size: 4rem;
  line-height: 4.688rem;
  color: #fff;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2rem;
  padding-bottom: 4.2rem;
  width: 7.9rem;
  height: 100%;
`;

const Logo = styled.div`
  width: 100%;
  height: 5.8rem;
  background-image: url('/image/teamLogo/kiwoom.png');
  background-size: auto 5.8rem;
  background-repeat: no-repeat;
  background-position: center;
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
  width: 77rem;
  padding-top: 4.9rem;
  padding-left: 5.2rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1.7rem;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 4.8rem;
`;

const ContentsTitle = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
`;

const Contents = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
`;

function Profile() {
  return (
    <>
      <NameBox>
        <Name>Jung-hoo Lee&nbsp;</Name>
        <Number>#51</Number>
      </NameBox>
      <LogoBox>
        <TopLine />
        <Logo />
        <BottomLine />
      </LogoBox>
      <ProfileContainer>
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
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>BIRTH:</ContentsTitle>
            <Contents>1998.08.20</Contents>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>ALMA MATER:</ContentsTitle>
            <Contents>WHIMOON HIGH SCHOOL</Contents>
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
