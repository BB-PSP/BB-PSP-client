import styled from 'styled-components';
import CommonLayout from '../../components/layout/common/CommonLayout';
import { breakpoints } from '../../styles/media';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 19.54vh;
  ${breakpoints.large} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2.08vw;
    row-gap: 3.7vh;
    width: 70.94vw;
    height: 63.33vh;
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
`;

function Team() {
  const router = useRouter();
  const team = router.query.proteam;
  console.log(team);
  // 쿼리로 선택한 팀을 받아온다.
  // 그 팀의 선수들을 전부 불러오는 api를 호출한다.
  return (
    <Wrapper>
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return (
            <PlayerCard
              key={i}
              age={0}
              backNumber={0}
              batInfo={''}
              pitchInfo={''}
              birth={''}
              height={''}
              weight={''}
              highSchool={''}
              position={''}
              salary={''}
              name={''}
              team={''}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
}

Team.PageLayout = CommonLayout;

export default Team;
