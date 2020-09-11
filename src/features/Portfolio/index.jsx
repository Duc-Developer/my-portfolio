import React, { useState } from "react";
import "./Portfolio.css";
import { Row, Col, Container } from "reactstrap";
import SideBarAnimation from "./SideBarAnimation";

export default function Portfolio(props) {
  const { defaultValues } = props;
  const [isActive, setActive] = useState(false);
  return (
    <div className="portfolio">
      <div className="portfolio__icon-nav-mobi">
        <i
          type="button"
          onClick={() => {
            setActive(!isActive);
          }}
          className="fas fa-list-alt fa-3x"
        />
      </div>
      <div className="portfolio__dashboard">
        <div
          className={`portfolio__left-board ${
            isActive ? "portfolio__dropdown-mobi" : ""
          }`}
        >
          <SideBarAnimation
            avatarSize={180}
            name={defaultValues.fullName}
            fbLink="https://www.facebook.com/PoPeooo/"
            githubLink="https://github.com/Duc-Developer?tab=repositories"
            phoneNumber="0965971469"
            defaultValues={defaultValues}
            mainWidth="100%"
            mainHeight="100%"
            textColor="white"
            iconColor="white"
            src={defaultValues.avatar}
          />
        </div>
        <div
          className={`portfolio__right-board ${
            !isActive ? "portfolio__main-mobi" : ""
          }`}
        >
          <div className="portfolio__right-board--scroll portfolio__main-mobi--scroll">
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information hereddddddddddddddddddddddd</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
            <div style={{backgroundColor:"white"}}>information here</div>
          </div>
        </div>
      </div>

      <div className="portfolio__main-control portfolio__control-mobi">
        <div className="portfolio__main-control-top">navTop</div>
        <div className="portfolio__main-control-bottom">navBottom</div>
      </div>
    </div>
  );
}
