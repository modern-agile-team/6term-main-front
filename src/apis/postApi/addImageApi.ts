import instance from '../axiosInstance';

type Post = {
  imageUri: FormData;
  boardId: number;
};

const createPostImgApi = async ({ imageUri, boardId }: Post) => {
  await instance.post(`/boardimages/${boardId}`, {
    imageUri,
  });
};

export default createPostImgApi;
