import { Season, StatTd, StatTh, StatTr, Table, Wrapper } from './styles';

const StatTable = () => {
  return (
    <Wrapper>
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
          <StatTd>.360</StatTd>
        </StatTr>
      </Table>
    </Wrapper>
  );
};

export default StatTable;
