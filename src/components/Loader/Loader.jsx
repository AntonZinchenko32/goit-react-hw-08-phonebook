import { ThreeDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { Blur, LoaderStyled } from './Loader.styled';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <Blur>
      <LoaderStyled>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </LoaderStyled>
    </Blur>,
    modalRoot
  );
};
