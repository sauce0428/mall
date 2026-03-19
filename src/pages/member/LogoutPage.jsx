import Header from "../../include/Header";
import LogoutComponent from "../../components/member/LogoutComponent";
import "./LogoutPage.css"; // CSS 파일 임포트

const LogoutPage = () => {
  return (
    <div className="login-page-container">
      {/* 헤더 영역 */}
      <div className="login-header-section">
        <Header />
      </div>

      {/* 로그인 컴포넌트가 배치될 중앙 박스 */}
      <div className="login-content-wrapper">
        <LogoutComponent />
      </div>
    </div>
  );
};
export default LogoutPage;
