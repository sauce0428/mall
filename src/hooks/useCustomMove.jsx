import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

//"5" 존재하면 5 리턴하고, ""없으면 defaultValue 리턴하는 화살표함수
const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  //const queryDefault = "?page=2&size=10"
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가

  //http://~~~~/todo/list?page=1&size=10
  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: `../todo/list`,
      search: queryStr,
    });
    setRefresh(!refresh);
  };

  //http://~~~~/todo/modify?page=1&size=10
  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../todo/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  //http://~~~~/todo/read?page=1&size=10
  const moveToRead = (num) => {
    navigate({
      pathname: `../todo/read/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  //http://~~~~/product/read?page=1&size=10
  const moveToProductRead = (pno) => {
    navigate({
      pathname: `../product/read/${pno}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  //************* PRODUCT ****************
  //http://~~~~/product/list?page=1&size=10
  const moveToProductList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: `../product/list`,
      search: queryStr,
    });
    setRefresh(!refresh);
  };

  //http://~~~~/product/modify?page=1&size=10
  const moveToProductModify = (pno) => {
    console.log(queryDefault);
    navigate({
      pathname: `../product/modify/${pno}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  return {
    moveToProductList,
    moveToList,
    moveToModify,
    moveToRead,
    moveToProductRead,
    moveToProductModify,
    page,
    size,
    refresh,
  }; //moveToModify 추가
};

export default useCustomMove;
