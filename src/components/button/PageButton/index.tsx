import { IButton } from '@store/Types';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

import { ArrowImg, Button, ButtonContainer, ReversedArrowImg } from './styles';
import 'react-toastify/dist/ReactToastify.css';

const PageButton = ({ prev, next }: IButton) => {
  const notify = () =>
    toast.warn('옵션을 하나 이상 선택해주세요!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  return (
    <ButtonContainer>
      <Link href={prev}>
        <Button style={{ textAlign: 'right' }}>
          prev
          <ReversedArrowImg src="/image/arrow.png" alt="이전 페이지 버튼" />
        </Button>
      </Link>
      {next.length === 0 ? (
        <Link href={next}>
          <div>
            <Button style={{ textAlign: 'left' }} onClick={notify}>
              next
              <ArrowImg src="/image/arrow.png" alt="다음 페이지 버튼" />
            </Button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
            />
          </div>
        </Link>
      ) : (
        <Link href={next}>
          <Button style={{ textAlign: 'left' }}>
            next
            <ArrowImg src="/image/arrow.png" alt="다음 페이지 버튼" />
          </Button>
        </Link>
      )}
    </ButtonContainer>
  );
};

export default PageButton;
