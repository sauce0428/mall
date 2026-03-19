import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";
import "./LogoutComponent.css"; // CSS 파일 분리
import useCustomLogin from "../../hooks/useCustomLogin";

export default function LogoutComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doLogout, moveToPath } = useCustomLogin();
  const handleClickLogout = () => {
    doLogout();
    alert("로그아웃되었습니다.");
    moveToPath("/");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-header">Logout</div>

        <div className="logout-body">
          <h3 className="logout-title">로그아웃을 진행하시겠습니까?</h3>

          <div className="logout-button-wrapper">
            <button
              className="btn-logout-submit"
              type="button"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
