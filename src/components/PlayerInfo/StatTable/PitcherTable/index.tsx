import { IPitcherStatProps } from '@store/Types';

import { Season, StatTd, StatTh, StatTr, Table, Wrapper } from './styles';

const PitcherTable = (pitcherStat: IPitcherStatProps) => {
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
          <StatTd>{pitcherStat?._G}</StatTd>
          <StatTd>{pitcherStat?._IP}</StatTd>
          <StatTd>{pitcherStat?._W}</StatTd>
          <StatTd>{pitcherStat?._L}</StatTd>
          <StatTd>{pitcherStat?._ERA}</StatTd>
          <StatTd>{pitcherStat?._SO}</StatTd>
          <StatTd>{pitcherStat?._HLD}</StatTd>
          <StatTd>{pitcherStat?._SV}</StatTd>
          <StatTd>{pitcherStat?._WHIP}</StatTd>
        </StatTr>
      </Table>
    </Wrapper>
  );
};

export default PitcherTable;
