import instance from '../axiosInstance';

const createPostImgApi = async (
  imageUri: FormData,
  boardId: number,
): Promise<any> => {
  await instance.post(`/boards/images/${boardId}`, imageUri, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default createPostImgApi;
