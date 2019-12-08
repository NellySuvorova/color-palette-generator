import React, { useEffect } from "react";
import { getCanvas } from "./utils";

const PickColors = props => {
  useEffect(() => {
    getCanvas(props.image);
  });
  return <img src={props.image ? props.image : null} />;
};

export { PickColors };
