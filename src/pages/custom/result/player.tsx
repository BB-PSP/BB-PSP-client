import styled from 'styled-components';
import BlackLayout from '../../../components/layout/BlackLayout';
import Profile from '../../../components/PlayerInfo/Profile';
import StatTable from '../../../components/PlayerInfo/StatTable';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 25.5rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 20.5rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 15.5rem;
  }
`;

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(39, 39, 39, 0.87);
  ${breakpoints.large} {
    width: 100%;
    height: 21.9rem;
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 21.9rem;
  }
  ${breakpoints.small} {
    width: 100%;
    height: 15.9rem;
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
    width: 100%;
    height: 59.1rem;
    padding-right: 6.4rem;
    padding-left: 6.4rem;
    margin-top: 1.5rem;
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 39.1rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    margin-top: 1.5rem;
  }
  ${breakpoints.small} {
    width: 100%;
    height: 35.1rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    margin-top: 1.5rem;
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
      </BottomContentsContainer>
    </Wrapper>
  );
}

Player.PageLayout = BlackLayout;

export default Player;
