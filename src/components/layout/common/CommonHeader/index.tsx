import Link from 'next/link';

import { SubTitle, Title, Wrapper } from './styles';

const CommonHeader = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Title>bb:</Title>
      </Link>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
    </Wrapper>
  );
};

export default CommonHeader;
