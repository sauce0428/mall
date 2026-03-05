import { useParams } from "react-router-dom";
import "./ReadPage.css";
import Header from "../../include/Header";

const ReadPage = () => {
  const { tno } = useParams();
  return (
    <>
      <div className="main-container">
        <Header />
        <p>Readpage tno = {tno}</p>
        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Read Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ReadPage;
