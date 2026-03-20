import Header from "../../include/Header";
import ModifyComponent from "../../components/member/ModifyComponent";
import "./ModifyPage.css"; // CSS 파일 임포트

const ModifyPage = () => {
  return (
    <div className="login-page-container">
      {/* 헤더 영역 */}
      <div className="login-header-section">
        <Header />
      </div>

      {/* 로그인 컴포넌트가 배치될 중앙 박스 */}
      <div className="login-content-wrapper">
        <ModifyComponent />
      </div>
    </div>
  );
};

export default ModifyPage;
