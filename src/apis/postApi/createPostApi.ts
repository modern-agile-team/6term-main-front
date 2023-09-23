import instance from '../axiosInstance';

type Post = {
  head: string;
  body: string;
  main_category: number;
  sub_category: number;
};

const createPostApi = async ({
  head,
  body,
  main_category,
  sub_category,
}: Post): Promise<any> => {
  const res = await instance.post<Post>(`/boards`, {
    head: head,
    body: body,
    main_category: main_category,
    sub_category: sub_category,
  });
  return res;
};

export default createPostApi;
