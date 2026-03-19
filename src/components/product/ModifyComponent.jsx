import { useEffect, useRef, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/productsApi"; // 필요한 API 함수 가정
import FetchingModal from "../common/FetchingModal";
import "./ModifyComponent.css";
import { API_SERVER_HOST } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  delFlag: false,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ModifyComponent = ({ pno }) => {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const uploadRef = useRef();
  const [result, setResult] = useState(null);
  const [infoModalOn, setInfoModalOn] = useState(false);
  //이동용 함수
  const { moveToProductRead, moveToProductList } = useCustomMove();

  useEffect(() => {
    const timer = setTimeout(() => setFetching(true), 0);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
    return () => clearTimeout(timer);
  }, [pno]);
  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const deleteOldImages = (imageName) => {
    const resultNames = product.uploadFileNames.filter(
      (name) => name !== imageName,
    );
    setProduct({ ...product, uploadFileNames: resultNames });
  };

  const handleClickModify = () => {
    // 서버에 보낼 form 생성
    const files = uploadRef.current.files;
    // 자료업로드 위치
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    // 이미지파일명 추가
    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append("uploadFileNames", product.uploadFileNames[i]);
    }
    setFetching(true);
    //수정 처리
    putOne(pno, formData).then((data) => {
      setResult("Modified");
      setInfoModalOn(true);
      setFetching(false);
    });
  };

  const handleClickDelete = () => {
    setFetching(true);
    deleteOne(pno).then((data) => {
      setResult("Deleted");
      setInfoModalOn(true);
      setFetching(false);
    });
  };

  const closeModal = () => {
    if (result === "Modified") {
      moveToProductRead(pno); // 조회 화면으로 이동
    } else if (result === "Deleted") {
      moveToProductList({ page: 1 });
    }
    setResult(null);
  };

  return (
    <div className="modify-container">
      {fetching && <FetchingModal />}

      <InfoModal
        show={infoModalOn}
        title={`RESULT`}
        content={`${result}`}
        callbackFn={closeModal}
      />
      <div className="modify-form">
        <div className="modify-form-group">
          <label className="modify-label">PNO</label>
          <input
            className="modify-control"
            name="pno"
            type="text"
            value={product.pno}
            onChange={handleChangeProduct}
            readOnly
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PNAME</label>
          <input
            className="modify-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PRICE</label>
          <input
            className="modify-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DESCRIPTION</label>
          <textarea
            className="modify-control"
            name="pdesc"
            rows={5}
            value={product.pdesc}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DELETE (Flag)</label>
          <select
            className="modify-select"
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
          >
            <option value={false}>사용 (Keep)</option>
            <option value={true}>삭제 (Delete)</option>
          </select>
        </div>

        <div className="modify-form-group">
          <label className="modify-label">New Files</label>
          <input
            className="modify-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 기존 이미지 목록 */}
      <div className="modify-image-grid">
        {product.uploadFileNames.map((imgFile, i) => (
          <div className="modify-image-card" key={i}>
            <button
              className="btn-img-delete"
              type="button"
              onClick={() => deleteOldImages(imgFile)}
            >
              DELETE
            </button>
            <img alt="product" src={`${host}/api/products/view/s_${imgFile}`} />
          </div>
        ))}
      </div>

      <div className="modify-button-group">
        <button
          className="btn-modify-action btn-del"
          type="button"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="btn-modify-action btn-mod"
          type="button"
          onClick={handleClickModify}
        >
          MODIFY
        </button>
        <button
          className="btn-modify-action btn-list"
          type="button"
          onClick={moveToProductList}
        >
          LIST
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
