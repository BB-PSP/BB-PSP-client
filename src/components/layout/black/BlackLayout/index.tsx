import BlackHeader from '../BlackHeader';
import { Container } from './styles';

const BlackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <BlackHeader />
      {children}
    </Container>
  );
};

export default BlackLayout;
