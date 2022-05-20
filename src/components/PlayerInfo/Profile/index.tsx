import { Large, Medium, Small } from '@styles/MediaQuery';

import {
  BottomLine,
  Contents,
  ContentsBox,
  ContentsTitle,
  Logo,
  LogoBox,
  Name,
  NameBox,
  Number,
  ProfileBox,
  ProfileContainer,
  TopLine,
} from './styles';

export interface StyledProps {
  team: string;
}

interface IProfileProps {
  name: string;
  backNumber: number;
  team: string;
  batInfo: string;
  pitchInfo: string;
  height: number;
  weight: number;
  school: string;
  birth: string;
  salary: number;
}

const Profile = (player: IProfileProps) => {
  const pay =
    player?.salary.toString().length < 5
      ? player?.salary + '만원'
      : player?.salary % 10000 === 0
      ? Math.floor(player?.salary / 10000) + '억원'
      : Math.floor(player?.salary / 10000) +
        '억 ' +
        (player?.salary % 10000) +
        '만원';
  return (
    <>
      <NameBox>
        <Name>{player?.name}&nbsp;</Name>
        <Number># {player?.backNumber}</Number>
      </NameBox>
      <LogoBox>
        <TopLine />
        <Logo team={player?.team} />
        <BottomLine />
      </LogoBox>
      <ProfileContainer>
        <Large>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>
                {player?.batInfo.slice(0, 1)}/{player?.pitchInfo.slice(0, 1)}
              </Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>{player?.height}CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>{player?.weight}KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Large>
        <Medium />
        <Small />
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>BIRTH:</ContentsTitle>
            <Contents>{player.birth}</Contents>
          </ContentsBox>
        </ProfileBox>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>CAREER:</ContentsTitle>
            <Contents>{player.school}</Contents>
          </ContentsBox>
        </ProfileBox>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>SALARY(2021): </ContentsTitle>
            <Contents>{pay}</Contents>
          </ContentsBox>
        </ProfileBox>
      </ProfileContainer>
    </>
  );
};

export default Profile;
