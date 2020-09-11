import React, { useState } from "react";
import "./Portfolio.css";
import SideBarAnimation from "./SideBarAnimation";
import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ExperiencePage from "./ExperiencePage";
import SpecialPage from "./SpecialPage";

export default function Portfolio(props) {
  const { defaultValues } = props;
  const [isActive, setActive] = useState(false);
  const [path, setPath] = useState("portfolio-about");

  function handleGoNext() {
    switch (path) {
      case "portfolio-about":
        return setPath("portfolio-special");
      case "portfolio-special":
        return setPath("portfolio-experience");
      default:
        return setPath("portfolio-about");
    }
  }

  function handleGoBack() {
    switch (path) {
      case "portfolio-about":
        return setPath("portfolio-experience");
      case "portfolio-experience":
        return setPath("portfolio-special");
      default:
        return setPath("portfolio-about");
    }
  }

  return (
    <div className="portfolio">
      <Router>
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
              {
                path && <Redirect to={`/${path}`} />
              }
              <Switch>
                <Route exact path="/portfolio-about">
                  <AboutPage
                    about={defaultValues.about}
                    email={defaultValues.email}
                    address={defaultValues.address}
                    phone={defaultValues.phone}
                    gender={defaultValues.gender}
                    fullName={defaultValues.fullName}
                    birthday={defaultValues.birthday}
                  />
                </Route>
                <Route exact path="/portfolio-special">
                  <SpecialPage />
                </Route>
                <Route exact path="/portfolio-experience">
                  <ExperiencePage />
                </Route>
              </Switch>
            </div>
          </div>
        </div>

        <div className="portfolio__main-control portfolio__control-mobi">
          <div className="portfolio__main-control-top">navTop</div>
          <div className="portfolio__main-control-bottom">
          <i 
          type="button"
          onClick={handleGoNext}
          className="fas fa-forward fa-2x" />
          <i 
          type="button"
          onClick={handleGoBack}
          className="fas fa-backward fa-2x" />
          </div>
        </div>
      </Router>
    </div>
  );
}
