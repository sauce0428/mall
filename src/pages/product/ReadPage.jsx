import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./ReadPage.css";
import Header from "../../include/Header";
import { useCallback } from "react";
import ReadComponent from "../../components/product/ReadComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { pno } = useParams();

  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent pno={pno} />
      </div>
    </>
  );
};

export default ReadPage;
