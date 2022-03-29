import styled from 'styled-components';
import BlackLayout from '../../../components/layout/black/BlackLayout';
import ResultButton from '../../../components/button/ResultButton';
import Profile from '../../../components/PlayerInfo/Profile';
import StatTable from '../../../components/PlayerInfo/StatTable';
import { breakpoints } from '../../../styles/media';

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
    /* padding-right: 3.33vw;
    padding-left: 3.33vw; */
    height: 54.54vh;
  }
  ${breakpoints.medium} {
    margin-top: 1.57vh;
    padding-right: 3.33vw;
    padding-left: 3.33vw;
    height: 50.54vh;
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
