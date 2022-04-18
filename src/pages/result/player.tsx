import styled from 'styled-components';
import BlackLayout from '@layout/black/BlackLayout';
import ResultButton from '@button/ResultButton';
import Profile from '@PlayerInfo/Profile';
import StatTable from '@PlayerInfo/StatTable';
import { breakpoints } from '@styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    margin-top: 6.48vh;
    height: 20.28vh;
  }
  ${breakpoints.medium} {
    margin-top: 6.48vh;
    height: 20.28vh;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
    height: 10vh;
  }
`;

const BottomContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0.87) 16.23%,
    rgba(39, 39, 39, 0.433227) 65.57%,
    rgba(39, 39, 39, 0) 100%
  );
  ${breakpoints.large} {
    margin-top: 1.57vh;
    height: 54.54vh;
  }
  ${breakpoints.medium} {
    margin-top: 1.57vh;
    padding-right: 3.33vw;
    padding-left: 3.33vw;
    height: 50.54vh;
  }
  ${breakpoints.small} {
    margin-top: 2vh;
    height: 50vh;
  }
`;

function Player() {
  return (
    <Wrapper>
      <TopContentsContainer>
        <Profile />
      </TopContentsContainer>
      <BottomContentsContainer>
        <StatTable />
        <ResultButton />
      </BottomContentsContainer>
    </Wrapper>
  );
}

Player.PageLayout = BlackLayout;

export default Player;
