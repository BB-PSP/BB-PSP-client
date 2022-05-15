import positionSelect from '@data/positionSelect.json';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { IPosition } from '@store/Types';
import PositionSelectCard from 'components/PositionSelectCard';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const team = router.query.proteam as string;
  const colorImages = positionSelectList?.map(
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
        <Link
          href={{
            pathname: `/kbo/${encodeURIComponent(team)}`,
            query: { name: JSON.stringify(team) },
          }}
          as={`/kbo/${encodeURIComponent(team)}`}
        >
          <button>
            <PositionSelectCard position={pitcher} />
          </button>
        </Link>
        <Link
          href={{
            pathname: `/kbo/${encodeURIComponent(team)}`,
            query: { name: JSON.stringify(team) },
          }}
          as={`/kbo/${encodeURIComponent(team)}`}
        >
          <button>
            <PositionSelectCard position={batter} />
          </button>
        </Link>
      </CardWrapper>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const positionSelectList = positionSelect?.positionSelectList;
  return {
    props: {
      positionSelectList,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

Position.PageLayout = CommonLayout;

export default Position;
