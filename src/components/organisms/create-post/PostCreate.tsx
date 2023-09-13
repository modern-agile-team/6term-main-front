const PostCreate = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent: "center",
        }}>
            <div>
                <div>
                    <div>제목</div>
                    <input type="text" placeholder="제목입력"></input>
                </div>
                <div>
                    <div>   
                        <div>본문</div>
                        <div>본문 네비바</div>
                    </div>
                    <input size={100} style={{height:100}} type="text" placeholder="본문 입력"></input>
                </div>
                <div>
                    <div>사진</div>
                    <div>
                        <div>사진</div>
                        <div>사진 url들어올 곳</div>
                        <button>사진추가</button>
                    </div>
                </div>
                <div>올리기</div>
            </div>
        </div>
    );
}

export default PostCreate;