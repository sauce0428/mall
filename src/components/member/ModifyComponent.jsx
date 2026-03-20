import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { modifyMember } from "../../api/memberApi";
import InfoModal from "../common/InfoModal";
import useCustomLogin from "../../hooks/useCustomLogin";
import "./ModifyComponent.css"; // CSS 파일 분리

const initState = {
  email: "",
  pw: "",
  nickname: "",
};

export default function MemberModifyComponent() {
  const [member, setMember] = useState(initState);
  const loginInfo = useSelector((state) => state.loginSlice);
  const [result, setResult] = useState(null);
  const { moveToLogin } = useCustomLogin();

  useEffect(() => {
    // Redux 로그 정보를 로컬 상태에 반영
    const timer = setTimeout(() => {
      setMember({ ...loginInfo, pw: "ABCD" });
    }, 0);

    return () => clearTimeout(timer); // 언마운트 시 타이머 제거
  }, [loginInfo]);

  // 상태 업데이트 로직 보완 (불변성 준수)
  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickModify = () => {
    modifyMember(member).then((data) => {
      setResult("Modified");
    });
  };

  const closeModal = () => {
    setResult(null);
    moveToLogin(); // 수정 완료 후 로그인 페이지 등으로 이동
  };

  return (
    <div className="member-modify-container">
      {/* 결과 모달 */}
      {result && (
        <InfoModal
          show={true}
          title="회원 정보 수정"
          content="정보 수정이 완료되었습니다."
          callbackFn={closeModal}
        />
      )}

      <h2 className="modify-title">Member Profile</h2>

      <div className="modify-fields">
        {/* 이메일 (수정 불가) */}
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            name="email"
            type="text"
            value={member.email}
            onChange={handleChange}
            disabled={true}
          />
        </div>

        {/* 비밀번호 */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            name="pw"
            type="password"
            placeholder="New Password"
            value={member.pw}
            onChange={handleChange}
          />
        </div>

        {/* 닉네임 */}
        <div className="input-group">
          <label className="input-label">Nickname</label>
          <input
            className="input-field"
            name="nickname"
            type="text"
            placeholder="Your nickname"
            value={member.nickname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="modify-button-wrapper">
        <button
          className="btn-modify-submit"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
      </div>
    </div>
  );
}
