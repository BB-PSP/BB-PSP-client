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
  const pos = position.length === 3 ? position.slice(1, 3) : position;
  return (
    <Wrapper>
      <ContentsBox>
        <LeftBox>
          <Name>{name}</Name>
          <LittleBox>
            <Position>{pos}</Position>
            <Birthday>{birth}</Birthday>
          </LittleBox>
        </LeftBox>
        <RightBox team={team} />
      </ContentsBox>
    </Wrapper>
  );
};

export default BatterFrontCard;
