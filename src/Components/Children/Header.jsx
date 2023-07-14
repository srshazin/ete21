import { BiSquareRounded } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="header-logo">
      {location.key !== "default" ? (
        <MdArrowBack onClick={() => navigate(-1)} className="headerBackBtn" />
      ) : (
        <BiSquareRounded
          onClick={() => navigate("/dummified")}
          className="dummyBtn"
        />
      )}

      <Link to={"/"}>
        <div className="logo-txt">ete'21</div>
      </Link>
      <BsSunFill className="themeToggleBtn" />
    </nav>
  );
};

export default Header;
