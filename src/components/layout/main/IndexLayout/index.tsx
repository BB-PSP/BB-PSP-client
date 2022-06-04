import { Container, ImageContainer } from './styles';

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {children}
      <ImageContainer />
    </Container>
  );
};

export default IndexLayout;
