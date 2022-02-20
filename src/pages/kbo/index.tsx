import TeamCard from '../../components/kbo/TeamCard';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

export default function Kbo() {
  return (
    <CardContainer>
      <TeamCard />
    </CardContainer>
  );
}
