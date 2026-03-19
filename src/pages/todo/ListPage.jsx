import "./ListPage.css";
import Header from "../../include/Header";
import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  const [queryParam] = useSearchParams();
  const page = queryParam.get("page") ? parseInt(queryParam.get("page")) : 1;
  const size = queryParam.get("size") ? parseInt(queryParam.get("size")) : 10;

  return (
    <>
      <div className="main-container">
        <Header />
        <main className="list-content-area">
          <div className="list-wrapper">
            {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
            <ListComponent />
          </div>
        </main>
      </div>
    </>
  );
};

export default ListPage;
