import React from "react";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  widthIcon: PropTypes.number,
  heightIcon: PropTypes.number,
};

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
        backgroundColor: "black",
      }}
      className="loading-page"
    >
      <div style={{ position: "relative" }}>
        <Spinner
          color={color}
          size={size}
          style={{
            width: `${widthIcon}rem`,
            height: `${heightIcon}rem`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: `${0.2 * widthIcon}rem`,
            left: `${0.2 * heightIcon}rem`,
          }}
        >
          <Spinner
            color={color}
            size={size}
            style={{
              width: `${0.6 * widthIcon}rem`,
              height: `${0.6 * heightIcon}rem`,
            }}
            type="grow"
            color="danger"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: `${0.1 * widthIcon}rem`,
            left: `${0.1 * heightIcon}rem`,
          }}
        >
          <Spinner
            color={color}
            size={size}
            style={{
              width: `${0.8 * widthIcon}rem`,
              height: `${0.8 * heightIcon}rem`,
            }}
            color="warning"
          />
        </div>
      </div>
    </div>
  );
}
