import styled from 'styled-components';
import PlayerCard from '../../../components/custom/PlayerCard';

const Wrapper = styled.div`
  padding-top: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Result() {
  return (
    <Wrapper>
      <PlayerCard />
    </Wrapper>
  );
}
