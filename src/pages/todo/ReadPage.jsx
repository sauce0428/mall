import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./ReadPage.css";
import Header from "../../include/Header";
import { useCallback } from "react";
import ReadComponent from "../../components/todo/ReadComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const { moveToList, moveToModify } = useCustomMove();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  //"?page=1&size=10"
  const queryStr = createSearchParams({ page, size }).toString();
  //동적페이지 이동
  const moveModify = useCallback(() => {
    navigate({
      pathname: `/todo/modify/${tno}`,
      search: queryStr,
    });
  }, [navigate, tno, queryStr]);

  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent
          tno={tno}
          moveToList={moveToList}
          moveToModify={moveModify}
        />
      </div>
    </>
  );
};

export default ReadPage;
