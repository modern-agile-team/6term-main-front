import * as S from "./styled";

const SearchBox = () => {

    const onSubmitHandler = (e : any) : void => {
        e.preventDefault();   
    }

    return (
        <S.SearchContainer>
            <S.SearchForm onSubmit={onSubmitHandler}>
                <S.SearchInput type="text" placeholder="검색어 입력" />
                <S.SearchButton>검색</S.SearchButton>
            </S.SearchForm>
        </S.SearchContainer>
    );
}

export default SearchBox;