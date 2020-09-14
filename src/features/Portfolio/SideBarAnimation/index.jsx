import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Avatar from "../../../components/Avatar";
import "./SideBarAnimation.css";
import { Button } from "reactstrap";
import TextAnimation from "../../../components/TextAnimation";
import { useReactToPrint } from "react-to-print";
import MyCV from "../../MyCV";
import { useHistory } from "react-router-dom";

SideBarAnimation.propTypes = {
  avatarSize: PropTypes.number,
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  mainWidth: PropTypes.string,
  mainHeight: PropTypes.string,
  iconSize: PropTypes.string,
  fbLink: PropTypes.string,
  githubLink: PropTypes.string,
  phoneNumber: PropTypes.string,
};

SideBarAnimation.defaultProps = {
  iconSize: "fa-2x",
};

export default function SideBarAnimation(props) {
  const {
    avatarSize,
    src,
    backgroundColor,
    name,
    textColor,
    mainWidth,
    mainHeight,
    iconSize,
    iconColor,
    fbLink,
    phoneNumber,
    githubLink,
    defaultValues,
  } = props;

  const [spinFacebook, setSpinF] = useState(null);
  const [spinPhone, setSpinP] = useState(null);
  const [spinGithub, setSpinG] = useState(null);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: mainWidth,
        height: mainHeight,
      }}
      className="side-bar-animation"
    >
      <div style={{ display: "none" }}>
        <MyCV data={defaultValues} ref={componentRef} />
      </div>
      <div className="side-bar-animation-header">
        <Avatar
          size={avatarSize}
          border="2px solid white"
          alt="avatar-side-bar-animation"
          src={src}
        />
      </div>
      <div className="side-bar-animation-body">
        <div>
          <h3 style={{ color: textColor }}>{name}</h3>
        </div>
        <div>
          <TextAnimation
            color="#DCDCDC"
            fontSize={1}
            textList={[
              "I'm Fresher",
              "I'm try hard every day",
              "I'm will be fullStack Developer",
            ]}
          />
        </div>
        <div className="side-bar-animation-body-icon-box">
          <a target="_blank" href={fbLink}>
            <i
              type="button"
              onMouseOver={() => {
                setSpinF("fa-spin");
              }}
              onMouseLeave={() => {
                setSpinF(null);
              }}
              style={{ color: iconColor, backgroundColor: backgroundColor }}
              className={`fab fa-facebook-f ${iconSize} ${spinFacebook}`}
            />
          </a>
          <a href={`tel:${phoneNumber}`}>
            <i
              type="button"
              onMouseOver={() => {
                setSpinP("fa-spin");
              }}
              onMouseLeave={() => {
                setSpinP(null);
              }}
              style={{ color: iconColor, backgroundColor: backgroundColor }}
              className={`fas fa-phone ${iconSize} ${spinPhone}`}
            />
          </a>
          <a target="_blank" href={githubLink}>
            <i
              type="button"
              onMouseOver={() => {
                setSpinG("fa-spin");
              }}
              onMouseLeave={() => {
                setSpinG(null);
              }}
              style={{ color: iconColor, backgroundColor: backgroundColor }}
              className={`fab fa-github ${iconSize} ${spinGithub}`}
            />
          </a>
        </div>
        <div className="side-bar-animation-body-dowload-button">
          <Button size="lg" onClick={handlePrint} color="success">
            <b> Download CV </b>
          </Button>
        </div>
      </div>
      <div className="side-bar-animation-footer">
        <div>
          <Button
            href="/login"
            color="link"
          >
            <b style={{ color: textColor }}>LOGIN</b>
          </Button>
        </div>
        <div>
          <i style={{ color: textColor }}>@2020 building by DucJS</i>
        </div>
      </div>
    </div>
  );
}
