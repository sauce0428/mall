import { Link } from "react-router-dom";
import "./MainPage.css";
import Header from "../include/Header";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <Link to={"/about"}>About</Link>
        </div>
        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
