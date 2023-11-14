import React, { ChangeEvent, useState } from 'react';
import * as S from './styled';
import CustomSelect from '@/components/common/CustomSelect';
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { json } from 'stream/consumers';
import { searchBoardAtom } from '@/recoil/atoms/SearchAtom';
import { escape } from 'querystring';

export interface searchType {
  searchQuery: string;
  part: string;
}

const SearchBox = () => {
  const { isOpenModal, handleModal } = useModal();
  const [getSelect, setSelect] = useRecoilState(searchBoardAtom);
  const [getSearch, setSearch] = useState<searchType>({
    searchQuery: '',
    part: 'head',
  });
  const router = useRouter();
  /** 선택 시 */
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.dataset.mainselect;
    const { innerText } = target;
    switch (innerText) {
      case '제목검색':
        setSearch((prev) => {
          return {
            ...prev,
            part: 'head',
          };
        });
        break;
      case '본문검색':
        setSearch((prev) => {
          return {
            ...prev,
            part: 'body',
          };
        });
        break;
    }
    setSelect(innerText);
  };
  //submit새로고침 방지
  const onSubmitHandler = (e: any): void => {
    e.preventDefault();
  };

  const onChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setSearch((prev) => {
      return {
        ...prev,
        searchQuery: event,
      };
    });
  };

  const hanldeSearchButton = () => {
    if (router.query.category === undefined) {
      router.push({
        pathname: `/`,
        query: {
          searchQuery: getSearch.searchQuery,
          part: getSearch.part,
        },
      });
    } else {
      router.push({
        pathname: `${router.query.category}`,
        query: {
          searchQuery: getSearch.searchQuery,
          part: getSearch.part,
        },
      });
    }
    setSearch((prev) => {
      return {
        ...prev,
        searchQuery: '',
      };
    });
  };

  return (
    <S.SearchContainer>
      <S.SearchForm onSubmit={onSubmitHandler}>
        <CustomSelect show={isOpenModal} hide={handleModal} title="검색">
          <div onClick={handleOnChangeSelectValue}>제목검색</div>
          <div onClick={handleOnChangeSelectValue}>본문검색</div>
        </CustomSelect>
        <S.SearchInput
          type="text"
          placeholder="검색어 입력"
          value={getSearch.searchQuery}
          onChange={onChangeInputSearch}
        />
        <S.SearchButton onClick={hanldeSearchButton}>검색</S.SearchButton>
      </S.SearchForm>
    </S.SearchContainer>
  );
};

export default SearchBox;
