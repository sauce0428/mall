import { useParams, useSearchParams } from "react-router-dom";
import "./Modify.css";
import Header from "../../include/Header";

const Modify = () => {
  const { tno } = useParams();
  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <>
      <div className="main-container">
        <Header />
        <p>Modify page tno = {tno}</p>
        <p>
          Modify page page = {page} size = {size}
        </p>
        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Modify
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Modify;
