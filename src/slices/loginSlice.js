import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

// 1. 비동기 액션 생성
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadMemberCookie() || initState, // 쿠키가 없으면 초기값 사용
  reducers: {
    login: (state, action) => {
      console.log("login. .......... ");
      //{소셜로그인 회원이 사용}
      const payload = action.payload;
      setCookie("member", JSON.stringify(payload), 1); //1 일
      return payload;
    },
    logout: (state, action) => {
      console.log("로그아웃 ................ ");
      removeCookie("member"); // 쿠키 삭제
      return { ...initState }; // 초기 상태로 복구
    },
  },
  // 2. 비동기 작업의 상태 변화에 따른 처리
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("로그인 성공(비동기 완료)");
        const payload = action.payload;

        // 성공 시 쿠키에 저장 (문자열로 변환하여 1일간 유지)
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload), 1);
        }

        return payload; // 리덕스 상태(State)를 서버에서 받은 데이터로 교체
      })
      .addCase(loginPostAsync.pending, (state) => {
        console.log("로그인 진행 중...");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("로그인 요청 실패");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
