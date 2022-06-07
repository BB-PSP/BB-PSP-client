import Link from 'next/link';
import { useRouter } from 'next/router';

import { ArrowImg, BackArrowImg, Button, Wrapper } from './styles';

interface IResultButtonProps {
  position: string;
  name: string;
  birth: string;
}

const ResultButton = ({ position, name, birth }: IResultButtonProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Button onClick={() => router.back()} style={{ textAlign: 'right' }}>
        prev
        <ArrowImg src="/image/white_arrow_reverse.png" alt="이전 페이지 버튼" />
      </Button>
      <Link
        href={{
          pathname: '/result/[position]/[player]/[birth]/predictedStat',
          query: {
            position: position,
            player: name,
            birth: birth,
          },
        }}
      >
        <Button style={{ textAlign: 'left' }}>
          more
          <BackArrowImg
            src="/image/white_arrow.png"
            alt="성적 예측 페이지 버튼"
          />
        </Button>
      </Link>
    </Wrapper>
  );
};

export default ResultButton;
