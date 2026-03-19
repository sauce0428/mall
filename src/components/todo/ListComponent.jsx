import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import "./ListComponent.css";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, moveToRead, moveToList, refresh } = useCustomMove();
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh]);

  return (
    <div className="list-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th className="text-center col-tno">TNO</th>
            <th className="col-title">TITLE</th>
            <th className="text-center col-date">DATE</th>
          </tr>
        </thead>
        <tbody>
          {serverData.dtoList.map((todo) => (
            <tr key={todo.tno} onClick={() => moveToRead(todo.tno)}>
              {/* 이미지처럼 TNO와 DATE에 빨간색 포인트를 주려면 highlight-text 사용 */}
              <td className="text-center highlight-text">{todo.tno}</td>
              <td>{todo.title}</td>
              <td className="text-center highlight-text">{todo.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageComponent serverData={serverData} moveToList={moveToList} />
    </div>
  );
};

export default ListComponent;
