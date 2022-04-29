import BlackHeader from '../BlackHeader';
import { BackImage, Container } from './styles';

const BlackFullLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <BlackHeader />
      <BackImage src="/image/baseball/whole_baseball.png" alt="home" />
      {children}
    </Container>
  );
};

export default BlackFullLayout;
