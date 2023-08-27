import React, { useEffect } from "react";
import { MainAnimate3D } from "./main";

function BoxGame() {
  useEffect(() => {
    MainAnimate3D();
  }, []);
  return <div></div>;
}

export default BoxGame;
