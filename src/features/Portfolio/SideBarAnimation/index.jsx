import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../../components/Avatar";
import "./SideBarAnimation.css";
import { Button } from "reactstrap";

SideBarAnimation.propTypes = {
    avatarSize: PropTypes.number,
    src: PropTypes.string,
    backgroundColor: PropTypes.string,
    name: PropTypes.string,
    mainWidth: PropTypes.string,
    mainHeight: PropTypes.string,
    iconSize: PropTypes.string,
}

SideBarAnimation.defaultProps = {
    iconSize: "fa-2x"
}

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
      iconColor 
    } = props;

    const [spinFacebook, setSpinF] = useState(null);
    const [spinPhone, setSpinP] = useState(null);
    const [spinGithub, setSpinG] = useState(null);
  return (
    <div
      style={{ 
          backgroundColor: backgroundColor, 
          width: mainWidth, 
          height: mainHeight
        }}
      className="side-bar-animation"
    >
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
          <h3 style={{color: textColor}}>{name}</h3>
        </div>
        <div>content slide</div>
        <div className="side-bar-animation-body-icon-box">
        <i 
        type="button"
        onMouseOver={() => {setSpinF("fa-spin")}}
        onMouseLeave={() => {setSpinF(null)}}
        style={{color: iconColor}} 
        className={`fab fa-facebook-f ${iconSize} ${spinFacebook}`}/>
        <i 
        type="button"
        onMouseOver={() => {setSpinP("fa-spin")}}
        onMouseLeave={() => {setSpinP(null)}}
        style={{color: iconColor}} 
        className={`fas fa-phone ${iconSize} ${spinPhone}`}/>
        <i 
        type="button"
        onMouseOver={() => {setSpinG("fa-spin")}}
        onMouseLeave={() => {setSpinG(null)}}
        style={{color: iconColor}} 
        className={`fab fa-github ${iconSize} ${spinGithub}`}/>
        </div>
        <div className="side-bar-animation-body-dowload-button">
        <Button size="lg" color="success">
            <b> Download CV </b>
            </Button>
        </div>
      </div>
      <div className="side-bar-animation-footer">
        <div>
            <i style={{color: textColor}}>
                @2020 building by DucJS
                </i>
        </div>
      </div>
    </div>
  );
}
