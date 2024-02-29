import React from "react";
import { useLocation } from "react-router-dom";

function Detail(p) {
  const location = useLocation();
  //   const result = p.location.data;

  console.log(p);
  return <span>This is Movie's detail!</span>;
}

export default Detail;
