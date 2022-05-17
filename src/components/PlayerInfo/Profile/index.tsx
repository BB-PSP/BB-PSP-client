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

const Profile = (player: any) => {
  const team = player?.team;
  return (
    <>
      <NameBox>
        <Name>{player?.name}&nbsp;</Name>
        <Number># {player?.backNumber}</Number>
      </NameBox>
      <LogoBox>
        <TopLine />
        <Logo team={team} />
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
        <Medium>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>L/R</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>185CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>80KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Medium>
        <Small>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>B/T:</ContentsTitle>
              <Contents>L/R</Contents>
            </ContentsBox>
          </ProfileBox>
          <ProfileBox>
            <ContentsBox>
              <ContentsTitle>HEIGHT:</ContentsTitle>
              <Contents>185CM</Contents>
            </ContentsBox>
            <ContentsBox>
              <ContentsTitle>WEIGHT:</ContentsTitle>
              <Contents>80KG</Contents>
            </ContentsBox>
          </ProfileBox>
        </Small>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>BIRTH:</ContentsTitle>
            <Contents>{player.birth}</Contents>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>SCHOOL:</ContentsTitle>
            <Contents>{player.school}</Contents>
          </ContentsBox>
        </ProfileBox>
        <ProfileBox>
          <ContentsBox>
            <ContentsTitle>SALARY(2022):</ContentsTitle>
            <Contents>750MILLION KRW</Contents>
          </ContentsBox>
        </ProfileBox>
      </ProfileContainer>
    </>
  );
};

export default Profile;
