import TeamCard from '../../components/kbo/TeamCard';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Kbo() {
  return (
    <CardContainer>
      <TeamCard />
    </CardContainer>
  );
}
