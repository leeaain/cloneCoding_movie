import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      네비게이숑:&nbsp;&nbsp;
      <Link to="/" props="temp">
        홈
      </Link>
      &nbsp;&nbsp;
      {/* <Link to="/about">소개</Link> */}
      <Link to={{ pathname: "/about", state: { from: true } }}>소개</Link>
    </div>
  );
}

export default Nav;
