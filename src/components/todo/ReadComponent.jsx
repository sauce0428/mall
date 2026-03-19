import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import "./ReadComponent.css"; // CSS 파일 임포트

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno, moveToList, moveToModify }) => {
  const [todo, setTodo] = useState(initState); //아직 todo는 사용하지 않음
  //마운트기능
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div>
      <div className="read-container">
        <MakeDiv title="Tno" value={todo.tno} />
        <MakeDiv title="Writer" value={todo.writer} />
        <MakeDiv title="Title" value={todo.title} />
        <MakeDiv title="Due Date" value={todo.dueDate} />
        <MakeDiv
          title="Complete"
          value={todo.complete ? "Completed" : "Not Yet"}
        />
      </div>
      {/* 버튼 컨트롤 영역 */}
      <div className="button-group">
        <button
          className="custom-btn btn-modify"
          type="button"
          onClick={() => moveToModify(tno)}
        >
          수정하기
        </button>
        <button
          className="custom-btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

// 가독성을 위해 내부 컴포넌트로 분리 (첫 글자 대문자)
const MakeDiv = ({ title, value }) => (
  <div className="read-row">
    <div className="read-wrapper">
      <div className="read-label">{title}</div>
      <div className="read-value">{value}</div>
    </div>
  </div>
);

export default ReadComponent;
