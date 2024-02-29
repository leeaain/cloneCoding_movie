// 개발자 소개 화면
import React from "react";
import "./About.css?after";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.</span>
      <span> - George Orwell, 1984 -</span>
      {/* <h2>어서 오세요. {username}님 환영합니다.</h2> */}
    </div>
  );
}

export default About;
