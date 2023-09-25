import { NotificationModalAtom } from '@/recoil/atoms/NotificatioinModalAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';

const AlarmModal = () => {
  const [isAlarmModal, setIsAlarmModal] = useRecoilState(NotificationModalAtom);

  const handleCloseAlarm = () => {
    setIsAlarmModal(!isAlarmModal);
  };

  return (
    <div>
      <S.ModalWrapper>
        <S.FlexBox>
          <S.CloseBtn onClick={handleCloseAlarm}>X</S.CloseBtn>
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

          if (isAlarmModal) {
            handleCloseAlarm();
          }
        }}
      />
    </div>
  );
};

export default AlarmModal;
