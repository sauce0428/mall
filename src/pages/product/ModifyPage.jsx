import Header from "../../include/Header";
import ModifyComponent from "../../components/product/ModifyComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import "./ModifyPage.css";

const ModifyPage = () => {
  const { pno } = useParams();
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
          <ModifyComponent pno={pno} />
        </div>
      </main>
    </div>
  );
};

export default ModifyPage;
