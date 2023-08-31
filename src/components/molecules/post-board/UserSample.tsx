import * as S from "./styled";

interface User {
    name: string;
    img: string;
}

const UserSmaple = ({name, img} : User) : JSX.Element => {
    return (
        <div>
            <img src={img} alt="프로필 이미지"/>
            <div>이름 : {name}</div>
        </div>
    )
}

export default UserSmaple;