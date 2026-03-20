import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";
import "./KakaoLoginComponent.css"; // CSS 파일 분리

const KakaoLoginComponent = () => {
  const link = getKakaoLoginLink();

  return (
    <div className="kakao-login-container">
      <button className="btn-kakao" type="button">
        <Link className="kakao-link" to={link}>
          KAKAO LOGIN
        </Link>
      </button>
    </div>
  );
};

export default KakaoLoginComponent;
