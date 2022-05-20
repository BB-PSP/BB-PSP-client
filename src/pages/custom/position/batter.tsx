import PageButton from '@button/PageButton';
import batterPosition from '@data/batterPosition.json';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { selectedPositionState } from '@store/Data/atom';
import { IPosition } from '@store/Types';
import { breakpoints } from '@styles/media';
import PositionCard from 'components/PositionCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${breakpoints.large} {
    padding-top: 5vh;
    column-gap: 3vw;
    row-gap: 10vh;
  }
  ${breakpoints.medium} {
    padding-top: 8vh;
    column-gap: 5vw;
    row-gap: 3vh;
  }
  ${breakpoints.small} {
    height: 50vh;
    row-gap: 5vh;
    grid-template-columns: repeat(1, 1fr);
    overflow-y: scroll;
  }
`;

const imagePreload = (urls: string[]) => {
  urls.map((url) => {
    new Image().src = url;
  });
};

const Batter = ({
  batterPositionList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colorImages = batterPositionList.map(
    (position: IPosition) => position.colourLogo,
  );
  const [selectedPosition, setSelectedPosition] = useRecoilState<string[]>(
    selectedPositionState,
  );
  useEffect(() => {
    imagePreload(colorImages);
    setSelectedPosition([]);
  }, []);
  return (
    <Wrapper>
      <CardWrapper>
        {batterPositionList.map((batterPosition: IPosition) => {
          const isclicked = selectedPosition.includes(batterPosition.data);
          return (
            <div key={batterPosition?.name}>
              <PositionCard position={batterPosition} isclicked={isclicked} />
            </div>
          );
        })}
      </CardWrapper>
      {selectedPosition.length > 0 ? (
        <PageButton prev="/custom/position" next="/custom/range" />
      ) : (
        <PageButton prev="/custom/position" next="" />
      )}
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const batterPositionList = batterPosition?.batterPositionList;
  return {
    props: { batterPositionList },
  };
};

Batter.PageLayout = CommonLayout;

export default Batter;
