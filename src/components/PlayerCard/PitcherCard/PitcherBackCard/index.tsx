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
  g: number;
  w: number;
  l: number;
  era: number;
}

const PitcherBackCard = ({
  name,
  position,
  birth,
  team,
  g,
  w,
  l,
  era,
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
          <StatName>G</StatName>
          <Stat>{g}</Stat>
        </HitBox>
        <HRBox>
          <StatName>W</StatName>
          <Stat>{w}</Stat>
        </HRBox>
        <RBIBox>
          <StatName>L</StatName>
          <Stat>{l}</Stat>
        </RBIBox>
        <AVGBox>
          <StatName>ERA</StatName>
          <Stat>{era}</Stat>
        </AVGBox>
      </StatContainer>
    </Wrapper>
  );
};

export default PitcherBackCard;
