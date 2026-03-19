import "./AboutPage.css";
import Header from "../include/Header";
import useCustomLogin from "../hooks/useCustomLogin";

const AboutPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin();
  if (!isLogin) {
    alert("로그인을 해야만 볼수있는 페이집니다");
    return moveToLoginReturn();
  }

  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              About Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
