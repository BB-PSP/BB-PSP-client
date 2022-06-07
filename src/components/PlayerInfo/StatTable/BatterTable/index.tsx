import { IBatterStatProps } from '@store/Types';

import { Season, StatTd, StatTh, StatTr, Table, Wrapper } from './styles';

const BatterTable = (batterStat: IBatterStatProps) => {
  return (
    <Wrapper>
      <Season>2021 stats</Season>
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
          <StatTd>{batterStat?._G}</StatTd>
          <StatTd>{batterStat?._PA}</StatTd>
          <StatTd>{batterStat?._AB}</StatTd>
          <StatTd>{batterStat?._AVG?.toFixed(3)}</StatTd>
          <StatTd>{batterStat?._OBP?.toFixed(3)}</StatTd>
          <StatTd>{batterStat?._SLG?.toFixed(3)}</StatTd>
          <StatTd>{batterStat?._H}</StatTd>
          <StatTd>{batterStat?._HR}</StatTd>
          <StatTd>{batterStat?._RBI}</StatTd>
          <StatTd>{batterStat?._R}</StatTd>
          <StatTd>{batterStat?._BB}</StatTd>
        </StatTr>
      </Table>
    </Wrapper>
  );
};

export default BatterTable;
