import { Background, LoadingImage } from './styles';

const CommonLoading = () => {
  return (
    <Background>
      <LoadingImage src="/spinner.gif" alt="로딩중" />
    </Background>
  );
};

export default CommonLoading;
