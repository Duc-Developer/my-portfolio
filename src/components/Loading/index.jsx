import React from "react";
import { Spinner } from "reactstrap";

export default function Loading(props) {
  const { color, size, widthIcon, heightIcon, height, width } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
        width: width,
      }}
      className="loading-page"
    >
      <Spinner
        color={color}
        size={size}
        style={{width:widthIcon, height:heightIcon}}
      />
    </div>
  );
}
