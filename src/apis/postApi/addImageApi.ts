import instance from '../axiosInstance';

const createPostImgApi = async (
  imageUri: FormData,
  boardId: number,
): Promise<any> => {
  console.log(boardId);
  console.log(imageUri);
  await instance.post(`/boardimages/${boardId}`, {
    imageUri,
  });
};

export default createPostImgApi;
