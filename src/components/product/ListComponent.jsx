import { useEffect, useState } from "react";
import { getList } from "../../api/productsApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import "./ListComponent.css";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/todoApi";

const host = API_SERVER_HOST;

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
  const { page, size, moveToProductRead, moveToProductList, refresh } =
    useCustomMove();
  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // 마이크로 태스크 큐로 밀어넣어 렌더링 충돌 방지
    const timer = setTimeout(() => {
      setFetching(true);
    }, 0);
    getList({ page, size })
      .then((data) => {
        console.log(data);
        setServerData(data);
        setFetching(false); // 데이터 로딩 완료 시 false
      })
      .catch((err) => {
        // 에러 발생 시에도 로딩은 꺼줘야 하므로 예외 처리를 권장합니다.
        setFetching(false);
        console.error(err);
      });
    clearTimeout(timer);
  }, [page, size, refresh]);

  return (
    <div className="list-container">
      <h1>Product ListComponent</h1>
      {/* fetching이 true일 때만 모달을 보여줍니다. */}
      {fetching ? <FetchingModal /> : null}
      <div className="product-grid">
        {serverData.dtoList.map((product) => (
          <div
            className="product-card"
            key={product.pno}
            onClick={() => moveToProductRead(product.pno)}
          >
            <div className="product-info">
              <h4>PNO: {product.pno}</h4>
              <h4 className="product-name">NAME: {product.pname}</h4>
              <h4 className="product-price">
                PRICE: {product.price.toLocaleString()}원
              </h4>
            </div>

            <div className="product-img-box">
              {product.uploadFileNames && product.uploadFileNames.length > 0 ? (
                <img
                  alt="product"
                  src={`${host}/api/products/view/s_${product.uploadFileNames[0]}`}
                />
              ) : (
                <img
                  alt="product"
                  src={`${host}/api/products/view/default.jpg`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <PageComponent serverData={serverData} moveToList={moveToProductList} />
    </div>
  );
};

export default ListComponent;
