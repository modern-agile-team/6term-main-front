import * as S from "./styled";

const SearchBox = () => {

    const onSubmitHandler = (e : any) : void => {
        e.preventDefault();   
    }

    return (
        <S.PostContainer>
            <S.SearchForm onSubmit={onSubmitHandler}>
                <S.SearchInput type="text" placeholder="검색어 입력" />
                <S.SearchButton>검색</S.SearchButton>
            </S.SearchForm>
        </S.PostContainer>
    );
}

export default SearchBox;