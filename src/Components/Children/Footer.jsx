import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillHeart } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <p className="lab3">Quick Links</p>
      <div className="links">
        <a href="https://www.ruet.ac.bd/" className="foot_li0">
          RUET Main
        </a>
        <a href="https://www.ruet.ac.bd/" className="foot_li0">
          ETE RUET Home
        </a>
        <Link to="/about_ete" className="foot_li0">
          About ETE
        </Link>
        <Link to="/about_dev" className="foot_li0">
          About Developer
        </Link>
      </div>
      <div className="contact">
        <a
          className="social_mxedcnamdjd8787j32h"
          href="https://github.com/dev5h"
        >
          {" "}
          <FaGithub className="contact-ic" />
        </a>
        <a
          className="social_mxedcnamdjd8787j32h"
          href="https://twitter.com/srshazin"
        >
          {" "}
          <AiFillTwitterCircle className="contact-ic" />
        </a>
        <a
          className="social_mxedcnamdjd8787j32h"
          href="https://facebook.com/shazin001"
        >
          {" "}
          <BsFacebook className="contact-ic" />
        </a>
      </div>
      <div className="copytight_sec">
        <div className="dev-credit">
          Created with <AiFillHeart /> by <b> Shazin</b>
        </div>
        <div className="c3k30_9dsfed8d">
          Copyright &copy; All rights reserved by admin. All logos are licensed
          under their own trademark license.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
