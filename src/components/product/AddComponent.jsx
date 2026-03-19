import { useRef, useState } from "react";
import "./AddComponent.css"; // CSS 파일 임포트
import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import InfoModal from "../common/InfoModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [],
};

export default function AddComponent() {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState(null);
  const { moveToProductList } = useCustomMove();
  const uploadRef = useRef(); // 파일 업로드 접근을 위한 Ref

  //이벤트처리
  const handleChangeProduct = (e) => {
    // 기존 객체를 복사하여 안전하게 상태 업데이트
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = () => {
    // 전송 시 파일 데이터를 포함하기 위해 uploadRef 사용 가능
    const files = uploadRef.current.files;
    // API 서버에 전송될 FormData 생성
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    console.log(formData);
    // 여기에 API 호출 로직(예: postAdd)을 추가할 수 있습니다.
    setFetching(true);
    postAdd(formData).then((data) => {
      setFetching(false);
      setInfoModalOn(true);
      setResult(data.result);
    });
  };
  const closeModal = () => {
    setInfoModalOn(false);
    moveToProductList({ page: 1 });
  };

  return (
    <div className="add-container">
      {fetching ? <FetchingModal /> : <></>}
      <InfoModal
        show={infoModalOn}
        title={`Product ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={closeModal}
      />
      <div className="form-wrapper">
        {/* 상품명 입력 */}
        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input
            className="form-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
            placeholder="Enter pname"
          />
        </div>

        {/* 상품 설명 입력 (Textarea) */}
        <div className="form-group">
          <label className="form-label">Product Description</label>
          <textarea
            className="form-control"
            name="pdesc"
            value={product.pdesc}
            rows={4}
            onChange={handleChangeProduct}
          />
        </div>

        {/* 가격 입력 */}
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
            placeholder="Enter price"
          />
        </div>

        {/* 파일 업로드 (Multiple) */}
        <div className="form-group">
          <label className="form-label">Files</label>
          <input
            className="form-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="button-group">
        <button className="btn-save" type="button" onClick={handleClickAdd}>
          저장
        </button>
      </div>
    </div>
  );
}
