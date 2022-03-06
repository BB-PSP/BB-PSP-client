import styled from 'styled-components';
import BlackLayout from '../../../components/layout/BlackLayout';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 120.2rem;
    padding-top: 38.5rem;
  }
`;

const Contents = styled.span`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
  padding-bottom: 0.6rem;
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    width: 100%;
    height: 29.8rem;
  }
`;

const LogoBox = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    width: 31.6rem;
    height: 100%;
    padding: 6.2rem 4.3rem 6.2rem 3.6rem;
    background-image: url('/image/teamLogo/kiwoom.png');
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.large} {
    width: 88.6rem;
    height: 100%;
    padding: 4.6rem 0rem 4.7rem 0rem;
  }
`;

const BottomContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    width: 100%;
    height: 38.2rem;
    margin-top: 1.5rem;
    padding-top: 6.5rem;
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 105.2rem;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
  height: 8.8rem;
`;

const Category = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  text-align: center;
  color: #fff;
`;

const Stat = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  padding-top: 3rem;
  text-align: center;
  color: #fff;
`;

const FirstBorderLine = styled.div`
  position: absolute;
  width: 115.2rem;
  border: 1px solid #ffffff;
  margin-top: 3.6rem;
`;

const SecondBorderLine = styled.div`
  position: absolute;
  width: 115.2rem;
  border: 1px solid #ffffff;
  margin-top: 21rem;
`;

const TopStatContainer = styled.div``;

const BottomStatContainer = styled.div`
  padding-top: 8rem;
`;

function Player() {
  return (
    <Wrapper>
      <TopContentsContainer>
        <LogoBox />
        <ProfileBox>
          <Contents>BIRTH : 1998.08.20</Contents>
          <Contents>HIGHT : 185CM</Contents>
          <Contents>WEIGHT : 80KG</Contents>
          <Contents>B/T : L/R</Contents>
          <Contents>ALMA MATER : WHIMOON HIGH SCHOOL</Contents>
          <Contents>SALARY(2022) : 750MILLION</Contents>
        </ProfileBox>
      </TopContentsContainer>
      <BottomContentsContainer>
        <FirstBorderLine />
        <SecondBorderLine />
        <TopStatContainer>
          <StatContainer>
            <StatBox>
              <Category>G</Category>
              <Stat>123</Stat>
            </StatBox>
            <StatBox>
              <Category>AB</Category>
              <Stat>464</Stat>
            </StatBox>
            <StatBox>
              <Category>PA</Category>
              <Stat>544</Stat>
            </StatBox>
            <StatBox>
              <Category>H</Category>
              <Stat>167</Stat>
            </StatBox>
            <StatBox>
              <Category>1B</Category>
              <Stat>112</Stat>
            </StatBox>
            <StatBox>
              <Category>2B</Category>
              <Stat>42</Stat>
            </StatBox>
            <StatBox>
              <Category>3B</Category>
              <Stat>6</Stat>
            </StatBox>
            <StatBox>
              <Category>HR</Category>
              <Stat>7</Stat>
            </StatBox>
            <StatBox>
              <Category>R</Category>
              <Stat>78</Stat>
            </StatBox>
            <StatBox>
              <Category>RBI</Category>
              <Stat>85</Stat>
            </StatBox>
          </StatContainer>
        </TopStatContainer>
        <BottomStatContainer>
          <StatContainer>
            <StatBox>
              <Category>G</Category>
              <Stat>123</Stat>
            </StatBox>
            <StatBox>
              <Category>AB</Category>
              <Stat>464</Stat>
            </StatBox>
            <StatBox>
              <Category>PA</Category>
              <Stat>544</Stat>
            </StatBox>
            <StatBox>
              <Category>H</Category>
              <Stat>167</Stat>
            </StatBox>
            <StatBox>
              <Category>1B</Category>
              <Stat>112</Stat>
            </StatBox>
            <StatBox>
              <Category>2B</Category>
              <Stat>42</Stat>
            </StatBox>
            <StatBox>
              <Category>3B</Category>
              <Stat>6</Stat>
            </StatBox>
            <StatBox>
              <Category>HR</Category>
              <Stat>7</Stat>
            </StatBox>
            <StatBox>
              <Category>R</Category>
              <Stat>78</Stat>
            </StatBox>
            <StatBox>
              <Category>RBI</Category>
              <Stat>85</Stat>
            </StatBox>
          </StatContainer>
        </BottomStatContainer>
      </BottomContentsContainer>
    </Wrapper>
  );
}

Player.PageLayout = BlackLayout;

export default Player;
