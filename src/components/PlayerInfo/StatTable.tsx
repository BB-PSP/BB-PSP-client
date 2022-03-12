import styled from 'styled-components';

const Season = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
  padding-top: 5.2rem;
`;

const Table = styled.table`
  width: 115.2rem;
  margin-top: 3.8rem;
  &:first-child {
  }
  margin-bottom: 5.5rem;
`;

const StatTr = styled.tr`
  border-collapse: collapse;
  &:first-child {
    border-bottom: 1px solid #fff;
  }
`;

const StatTh = styled.th`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
  width: 6.5rem;
  padding-bottom: 0.7rem;
`;

const StatTd = styled.td`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.901rem;
  color: #fff;
  width: 4rem;
  text-align: center;
  padding-top: 2.3rem;
`;

function StatTable() {
  return (
    <>
      <Season>2021 stats</Season>
      <Table>
        <StatTr>
          <StatTh>G</StatTh>
          <StatTh>AB</StatTh>
          <StatTh>PA</StatTh>
          <StatTh>H</StatTh>
          <StatTh>1B</StatTh>
          <StatTh>2B</StatTh>
          <StatTh>3B</StatTh>
          <StatTh>HR</StatTh>
          <StatTh>R</StatTh>
          <StatTh>RBI</StatTh>
        </StatTr>
        <StatTr>
          <StatTd>123</StatTd>
          <StatTd>464</StatTd>
          <StatTd>544</StatTd>
          <StatTd>167</StatTd>
          <StatTd>112</StatTd>
          <StatTd>42</StatTd>
          <StatTd>6</StatTd>
          <StatTd>7</StatTd>
          <StatTd>78</StatTd>
          <StatTd>85</StatTd>
        </StatTr>
      </Table>
      <Table>
        <StatTr>
          <StatTh>BB</StatTh>
          <StatTh>IBB</StatTh>
          <StatTh>SO</StatTh>
          <StatTh>HBP</StatTh>
          <StatTh>SF</StatTh>
          <StatTh>SH</StatTh>
          <StatTh>GDP</StatTh>
          <StatTh>SB</StatTh>
          <StatTh>CS</StatTh>
          <StatTh>AVG</StatTh>
        </StatTr>
        <StatTr>
          <StatTd>62</StatTd>
          <StatTd>1</StatTd>
          <StatTd>37</StatTd>
          <StatTd>9</StatTd>
          <StatTd>9</StatTd>
          <StatTd>0</StatTd>
          <StatTd>8</StatTd>
          <StatTd>10</StatTd>
          <StatTd>3</StatTd>
          <StatTd>0.360</StatTd>
        </StatTr>
      </Table>
    </>
  );
}

export default StatTable;
