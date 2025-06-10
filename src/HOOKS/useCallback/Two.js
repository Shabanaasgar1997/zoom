import React, { memo } from "react";

function Two({ prop1 }) {
  console.log("*****welcome to the use Callback*******");
  return <div></div>;
}

export default memo(Two);
