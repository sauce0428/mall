import Header from "../../include/Header";
import AddComponent from "../../components/product/AddComponent";
import "./AddPage.css";
import { useRef, useState } from "react";

const AddPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="list-content-area">
          <div className="list-wrapper">
            {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
            <AddComponent />
          </div>
        </main>
      </div>
    </>
  );
};

export default AddPage;
