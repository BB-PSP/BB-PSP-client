import positionSelect from '@data/positionSelect.json';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { IPosition } from '@store/Types';
import PositionSelectCard from 'components/PositionSelectCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30vh;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const imagePreload = (urls: string[]) => {
  urls.map((url) => {
    new Image().src = url;
  });
};

const Position = ({
  positionSelectList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colorImages = positionSelectList.map(
    (position: IPosition) => position.colourLogo,
  );
  const pitcher = positionSelectList[0];
  const batter = positionSelectList[1];
  useEffect(() => {
    imagePreload(colorImages);
  }, []);

  return (
    <Wrapper>
      <CardWrapper>
        <Link href="/custom/range">
          <button>
            <PositionSelectCard position={pitcher} />
          </button>
        </Link>
        <Link href="/custom/position/batter">
          <button>
            <PositionSelectCard position={batter} />
          </button>
        </Link>
      </CardWrapper>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const positionSelectList = positionSelect?.positionSelectList;
  return {
    props: {
      positionSelectList,
    },
  };
};

Position.PageLayout = CommonLayout;

export default Position;
