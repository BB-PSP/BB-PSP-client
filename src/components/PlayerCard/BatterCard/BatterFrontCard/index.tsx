import {
  Birthday,
  ContentsBox,
  LeftBox,
  LittleBox,
  Name,
  Position,
  RightBox,
  Wrapper,
} from './styles';

export interface StyledProps {
  team: string;
}

export interface IPlayerFrontCard {
  name: string;
  position: string;
  birth: string;
  team: string;
}

const BatterFrontCard = ({ name, position, birth, team }: IPlayerFrontCard) => {
  return (
    <Wrapper>
      <ContentsBox>
        <LeftBox>
          <Name>{name}</Name>
          <LittleBox>
            <Position>{position}</Position>
            <Birthday>{birth}</Birthday>
          </LittleBox>
        </LeftBox>
        <RightBox team={team} />
      </ContentsBox>
    </Wrapper>
  );
};

export default BatterFrontCard;
