import { Background, LoadingImage } from './styles';

const BlackLoading = () => {
  return (
    <Background>
      <LoadingImage src="/spinner.gif" alt="로딩중" />
    </Background>
  );
};

export default BlackLoading;
