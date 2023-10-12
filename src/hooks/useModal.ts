import { ModalAtom } from '@/recoil/atoms/ModalAtom';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return {
    isOpenModal,
    handleModal,
  };
};

export default useModal;
