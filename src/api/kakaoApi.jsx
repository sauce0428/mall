import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const rest_api_key = `c75e334f039a1d9dd33cf0e5aca8d278`; //REST키값
const redirect_uri = `http://localhost:5173/member/kakao`;
const auth_code_path = `https://kauth.kakao.com/oauth/authorize`;

const access_token_url = `https://kauth.kakao.com/oauth/token`;

export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};

export const getAccessToken = async (authCode) => {
  const header = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,

    code: authCode,
  };

  // 객체를 쿼리 스트링 형태로 변환
  const requestParam = new URLSearchParams(params).toString();

  const res = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    requestParam,
    header,
  );

  return res.data;
};

export const getMemberWithAccessToken = async (accessToken) => {
  const res = await axios.get(
    `${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`,
  );
  return res.data;
};
