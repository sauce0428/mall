import React, { useState } from "react";
import "./LoginComponent.css"; // CSS 분리
import { useDispatch } from "react-redux";
import { loginPostAsync } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    // loginParam[e.target.name] = e.target.value (이 줄을 지우세요!)

    // 아래처럼 새로운 객체를 만들어서 통째로 갈아끼워야 합니다.
    setLoginParam({
      ...loginParam,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickLogin = (e) => {
    doLogin(loginParam)
      // loginSlice 의 비동기 호출
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert("이메일과 패스워드를 다시 확인하세요");
        } else {
          alert("로그인 성공");
          moveToPath("/");
        }
      });
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Login</h2>
      <div className="login-fields">
        {/* 이메일 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            name="pw"
            type="password"
            placeholder="Enter your password"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* 로그인 버튼 영역 */}
      <div className="login-button-wrapper">
        <button
          className="btn-login-submit"
          type="button"
          onClick={handleClickLogin}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
