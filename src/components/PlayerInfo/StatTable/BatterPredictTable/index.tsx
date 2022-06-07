import { IBatterPredictedStatProps } from '@store/Types';

import { Season, StatTd, StatTh, StatTr, Table, Wrapper } from './styles';

const BatterPredictTable = (predictedStat: IBatterPredictedStatProps) => {
  return (
    <Wrapper>
      <Season>2022 stats</Season>
      <Table>
        <StatTr>
          <StatTh>경기수</StatTh>
          <StatTh>타석</StatTh>
          <StatTh>타수</StatTh>
          <StatTh>타율</StatTh>
          <StatTh>출루율</StatTh>
          <StatTh>장타율</StatTh>
          <StatTh>안타</StatTh>
          <StatTh>홈런</StatTh>
          <StatTh>타점</StatTh>
          <StatTh>득점</StatTh>
          <StatTh>볼넷</StatTh>
        </StatTr>
        <StatTr>
          <StatTd>{predictedStat?.pg}</StatTd>
          <StatTd>{predictedStat?.ppa}</StatTd>
          <StatTd>{predictedStat?.pab}</StatTd>
          <StatTd>{predictedStat?.pavg?.toFixed(3)}</StatTd>
          <StatTd>{predictedStat?.pobp?.toFixed(3)}</StatTd>
          <StatTd>{predictedStat?.pslg?.toFixed(3)}</StatTd>
          <StatTd>{predictedStat?.ph}</StatTd>
          <StatTd>{predictedStat?.phr}</StatTd>
          <StatTd>{predictedStat?.prbi}</StatTd>
          <StatTd>{predictedStat?.pr}</StatTd>
          <StatTd>{predictedStat?.pbb}</StatTd>
        </StatTr>
      </Table>
    </Wrapper>
  );
};

export default BatterPredictTable;
