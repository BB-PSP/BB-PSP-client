import {
  AVGBox,
  Birthday,
  HitBox,
  HRBox,
  LogoBox,
  Name,
  Position,
  ProfileBox,
  RBIBox,
  SmallBox,
  Stat,
  StatContainer,
  StatName,
  Wrapper,
} from './styles';

export interface StyledProps {
  team: string;
}

export interface IPlayerBackCard {
  name: string;
  position: string;
  birth: string;
  team: string;
  hit: number;
  hr: number;
  rbi: number;
  avg: number;
}

const BatterBackCard = ({
  name,
  position,
  birth,
  team,
  hit,
  hr,
  rbi,
  avg,
}: IPlayerBackCard) => {
  return (
    <Wrapper team={team}>
      <LogoBox team={team} />
      <ProfileBox>
        <Name>{name}</Name>
        <SmallBox>
          <Position>{position}</Position>
          <Birthday>{birth}</Birthday>
        </SmallBox>
      </ProfileBox>
      <StatContainer>
        <HitBox>
          <StatName>H</StatName>
          <Stat>{hit}</Stat>
        </HitBox>
        <HRBox>
          <StatName>HR</StatName>
          <Stat>{hr}</Stat>
        </HRBox>
        <RBIBox>
          <StatName>RBI</StatName>
          <Stat>{rbi}</Stat>
        </RBIBox>
        <AVGBox>
          <StatName>AVG</StatName>
          <Stat>{avg}</Stat>
        </AVGBox>
      </StatContainer>
    </Wrapper>
  );
};

export default BatterBackCard;
