import "./AboutPage.css";
import Header from "../include/Header";

const AboutPage = () => {
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
