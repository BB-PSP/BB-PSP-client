import styled from 'styled-components';
import CommonLayout from '../../components/layout/common/CommonLayout';
import { breakpoints } from '../../styles/media';
import { useRouter } from 'next/router';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 39.6rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    padding-top: 24.6rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    padding-top: 12.8rem;
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

function Team() {
  const router = useRouter();
  console.log(router.query);

  return (
    <Wrapper>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return <PlayerCard key={i} />;
        })}
      </Container>
    </Wrapper>
  );
}

Team.PageLayout = CommonLayout;

export default Team;
