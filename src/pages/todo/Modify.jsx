import Header from "../../include/Header";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import "./Modify.css";

const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveRead } = useCustomMove();
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
          <ModifyComponent
            tno={tno}
            moveToList={moveToList}
            moveRead={moveRead}
          />
        </div>
      </main>
    </div>
  );
};

export default ModifyPage;
