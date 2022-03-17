import styled from 'styled-components';
import BlackFullLayout from '../../../../components/layout/black/BlackFullLayout';
import PrevButton from '../../../../components/button/PrevButton';
import StatTable from '../../../../components/PlayerInfo/StatTable';
import { breakpoints } from '../../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.large} {
    width: 128rem;
    margin-top: 24.5rem;
  }
  ${breakpoints.medium} {
    width: 64rem;
    margin-top: 10rem;
  }
  ${breakpoints.small} {
    width: 28rem;
    margin-top: 5rem;
  }
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0.87) 16.23%,
    rgba(39, 39, 39, 0.433227) 65.57%,
    rgba(39, 39, 39, 0) 100%
  );
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${breakpoints.large} {
    margin-top: 17.4rem;
    margin-bottom: 7rem;
  }
  ${breakpoints.medium} {
    margin-top: 17.4rem;
    margin-bottom: 7rem;
  }
  ${breakpoints.small} {
    margin-top: 5.4rem;
    margin-bottom: 2rem;
  }
`;

const PlayerName = styled.h1`
  position: absolute;
  font-family: 'RobotoBoldItalic';
  color: #fff;
  ${breakpoints.large} {
    font-size: 10rem;
    margin-top: 15.2rem;
  }
  ${breakpoints.medium} {
    font-size: 5rem;
    margin-top: 5.2rem;
  }
  ${breakpoints.small} {
    font-size: 3rem;
    margin-top: 2.2rem;
  }
`;

const Threeyear = () => {
  return (
    <Wrapper>
      <PlayerName>Jung-hoo Lee #07</PlayerName>
      <ContentsContainer>
        <StatContainer>
          <StatTable />
          <StatTable />
          <StatTable />
        </StatContainer>
        <ButtonContainer>
          <PrevButton />
        </ButtonContainer>
      </ContentsContainer>
    </Wrapper>
  );
};

Threeyear.PageLayout = BlackFullLayout;

export default Threeyear;
