import "./Login.css";
import Header from "../include/Header";

const Login = () => {
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Login
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
