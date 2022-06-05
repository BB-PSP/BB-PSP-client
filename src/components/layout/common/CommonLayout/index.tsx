import CommonHeader from '../CommonHeader';
import { Container, ImageContainer } from './styles';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <CommonHeader />
      {children}
      <ImageContainer />
    </Container>
  );
};

export default CommonLayout;
