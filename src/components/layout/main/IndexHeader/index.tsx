import Link from 'next/link';

import { Title, Wrapper } from './styles';

const IndexHeader = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Title>bb:</Title>
      </Link>
    </Wrapper>
  );
};

export default IndexHeader;
