import axios from 'axios';

export const register = async (data: {
  user_ID: string;
  user_PW: string;
  user_NickName: string;
}) => {
  try {
    const res = await axios.post(
      'http://localhost:3000/signup',
      {
        user_ID: data.user_ID,
        user_PW: data.user_PW,
        user_NickName: data.user_NickName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log('res >', res.status);
    return res;
  } catch (error) {
    throw new Error('post 오류 발생');
  }
};
