import { useRecoilState } from 'recoil';
import * as S from './styled';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const AlarmModal = ({ show, hide }: ModalType) => {
  return (
    <div>
      <S.ModalWrapper>
        <S.FlexBox>
          <S.CloseBtn onClick={hide}>X</S.CloseBtn>
        </S.FlexBox>
        <S.FlexBox>
          <button>&lt;</button>
          <S.AlarmTitle>알람 모달</S.AlarmTitle>
          <button>&gt;</button>
        </S.FlexBox>
        <S.DivisionLine />
      </S.ModalWrapper>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (show) {
            hide();
          }
        }}
      />
    </div>
  );
};

export default AlarmModal;
