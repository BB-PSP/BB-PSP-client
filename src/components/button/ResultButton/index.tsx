import Link from 'next/link';
import { useRouter } from 'next/router';

import { ArrowImg, BackArrowImg, Button, ViewAllBox, Wrapper } from './styles';

interface IResultButtonProps {
  name: string;
  birth: string;
}

const ResultButton = ({ name, birth }: IResultButtonProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Button onClick={() => router.back()} style={{ textAlign: 'right' }}>
        prev
        <ArrowImg src="/image/white_arrow_reverse.png" alt="이전 페이지 버튼" />
      </Button>
      <Link
        href={{
          pathname: '/result/batter/[player]/[birth]/threeyear',
          query: {
            player: name,
            birth: birth,
          },
        }}
      >
        <Button style={{ textAlign: 'left', width: '2.76vw' }}>
          <ViewAllBox>
            view all
            <BackArrowImg
              src="/image/white_arrow.png"
              alt="3년치 성적 예측 페이지 버튼"
            />
          </ViewAllBox>
        </Button>
      </Link>
    </Wrapper>
  );
};

export default ResultButton;
