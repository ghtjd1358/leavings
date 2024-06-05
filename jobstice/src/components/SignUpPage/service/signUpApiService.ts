import axios from 'axios';

export const userIdDuplicate = async (data: string) => {
  try {
    const res = await axios.post(
      'http://localhost:3000/idCheck',
      { isID: data },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log('res >', res.data);
    return res.data;
  } catch (error) {
    console.log('아이디 중복 체크 오류 >', error);
  }
};

export const nickNameDuplicate = async (data: string) => {
  try {
    console.log('닉네임 중복 체크 요청 데이터 >', data);
    const res = await axios.post(
      'http://localhost:3000/nickCheck',
      { data },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log('res >', res.data);
    return res.data;
  } catch (error) {
    console.log('닉네임 중복 체크 오류 >', error);
  }
};

// 회원 가입
export const register = async (data: {
  user_ID: string;
  user_PW: string;
  user_NickName: string;
}) => {
  try {
    const res = await axios.post(
      // 각자 주소로 변경
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
