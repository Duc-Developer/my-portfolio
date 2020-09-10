import React from "react";
import "./Portfolio.css";
import { Row, Col, Container } from "reactstrap";
import SideBarAnimation from "./SideBarAnimation";

export default function Portfolio(props) {
  const { defaultValues } = props;
  console.log(defaultValues)
  return (
    <div className="portfolio-component">
      <Container className="portfolio-main-container" fluid="md">
        <div className="portfolio-main-dashboard">
          <Row className="portfolio-wrap-dashboard">
            <Col lg="3" md="12">
              <SideBarAnimation
              avatarSize={180}
              name={defaultValues.fullName}
              mainWidth="100%"
              mainHeight="100%"
              textColor="white"
              iconColor="white"
              src={defaultValues.avatar}
              />
            </Col>
            <Col lg="9" md="12">
              <div className="portfolio-dashboard-right">information here</div>
            </Col>
          </Row>
        </div>
        <div className="portfolio-main-control">
          <div className="portfolio-main-control-nav-top">navTop</div>
          <div className="portfolio-main-control-nav-bottom">navBottom</div>
        </div>
      </Container>
    </div>
  );
}
