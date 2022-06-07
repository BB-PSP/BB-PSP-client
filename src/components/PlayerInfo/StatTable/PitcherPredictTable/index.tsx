import { IPitcherPredictedStatProps } from '@store/Types';

import { Season, StatTd, StatTh, StatTr, Table, Wrapper } from './styles';

const PitcherPredictTable = (predictedStat: IPitcherPredictedStatProps) => {
  return (
    <Wrapper>
      <Season>2021 stats</Season>
      <Table>
        <StatTr>
          <StatTh>경기수</StatTh>
          <StatTh>이닝</StatTh>
          <StatTh>승</StatTh>
          <StatTh>패</StatTh>
          <StatTh>방어율</StatTh>
          <StatTh>탈삼진</StatTh>
          <StatTh>홀드</StatTh>
          <StatTh>세이브</StatTh>
          <StatTh>WHIP</StatTh>
        </StatTr>
        <StatTr>
          <StatTd>{predictedStat?.pg}</StatTd>
          <StatTd>{predictedStat?.pip}</StatTd>
          <StatTd>{predictedStat?.pw}</StatTd>
          <StatTd>{predictedStat?.pl}</StatTd>
          <StatTd>{predictedStat?.pera.toFixed(2)}</StatTd>
          <StatTd>{predictedStat?.pso}</StatTd>
          <StatTd>{predictedStat?.phld}</StatTd>
          <StatTd>{predictedStat?.ps}</StatTd>
          <StatTd>{predictedStat?.pwhip}</StatTd>
        </StatTr>
      </Table>
    </Wrapper>
  );
};

export default PitcherPredictTable;
