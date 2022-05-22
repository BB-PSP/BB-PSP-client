import positionSelect from '@data/positionSelect.json';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { IPosition } from '@store/Types';
import { breakpoints } from '@styles/media';
import PositionSelectCard from 'components/PositionSelectCard';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30vh;
  ${breakpoints.medium} {
    width: 60%;
  }
  ${breakpoints.small} {
    width: 90%;
    margin-top: 25vh;
  }
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
  const [pitcher, setPitcher] = useState();
  const [batter, setBatter] = useState();
  useEffect(() => {
    if (positionSelectList.length > 0) {
      setPitcher(positionSelectList[0]);
      setBatter(positionSelectList[1]);
    }
    imagePreload(colorImages);
  }, []);

  return (
    <Wrapper>
      <CardWrapper>
        <Link href="/kbo/[proteam]/[position]" as={`/kbo/${team}/pitchers`}>
          <button>
            <PositionSelectCard position={pitcher} />
          </button>
        </Link>
        <Link href="/kbo/[proteam]/[position]" as={`/kbo/${team}/batters`}>
          <button>
            <PositionSelectCard position={batter} />
          </button>
        </Link>
      </CardWrapper>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = () => {
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
