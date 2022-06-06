import BlackHeader from '../BlackHeader';
import { Container, ImageContainer } from './styles';

const BlackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <BlackHeader />
      {children}
      <ImageContainer />
    </Container>
  );
};

export default BlackLayout;
