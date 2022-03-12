import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Season = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.901rem;
    padding-top: 5.2rem;
  }
  ${breakpoints.medium} {
    font-size: 1.8rem;
    line-height: 2.201rem;
    padding-top: 4.2rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.001rem;
    padding-top: 3.2rem;
  }
`;

const Table = styled.table`
  ${breakpoints.large} {
    width: 115.2rem;
    margin-top: 3.8rem;
    margin-bottom: 5.5rem;
  }
  ${breakpoints.medium} {
    width: 64rem;
    margin-top: 3.8rem;
    margin-bottom: 4.5rem;
  }
  ${breakpoints.small} {
    width: 30rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;

const StatTr = styled.tr`
  border-collapse: collapse;
  &:first-child {
    border-bottom: 1px solid #fff;
  }
`;

const StatTh = styled.th`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.901rem;
    width: 6.5rem;
    padding-bottom: 0.7rem;
  }
  ${breakpoints.medium} {
    font-size: 1.8rem;
    line-height: 2.201rem;
    width: 6.5rem;
    padding-bottom: 0.7rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 2rem;
    width: 3.5rem;
    padding-bottom: 0.7rem;
  }
`;

const StatTd = styled.td`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: center;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.901rem;
    width: 6.5rem;
    padding-top: 2.3rem;
  }
  ${breakpoints.medium} {
    font-size: 1.8rem;
    line-height: 2.201rem;
    width: 6.5rem;
    padding-top: 2.3rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 1.5rem;
    width: 3.5rem;
    padding-top: 1.6rem;
  }
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
