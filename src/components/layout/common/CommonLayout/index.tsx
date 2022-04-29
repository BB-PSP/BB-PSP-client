import CommonHeader from '../CommonHeader';
import { Container } from './styles';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <CommonHeader />
      {children}
    </Container>
  );
};

export default CommonLayout;
