import styled from 'styled-components';
import PlayerCard from '../../../components/custom/PlayerCard';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 10.7rem;
  }
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-bottom: 21.2rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-bottom: 5.2rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-bottom: 2.2rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  ${breakpoints.large} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4rem;
    row-gap: 7rem;
    width: 135.5rem;
    height: 62.6rem;
    padding-right: 7.3rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.medium} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
    width: 80.5rem;
    height: 55.6rem;
    padding-right: 7.3rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.2rem;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
  ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    height: 45rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default function Result() {
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return <PlayerCard key={i} />;
        })}
      </Container>
    </Wrapper>
  );
}
