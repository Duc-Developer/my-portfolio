import React, { Component } from "react";
import "./MyCV.css";
import { Row, Container, Col } from "reactstrap";
import Avatar from "../../components/Avatar";
import ProgressSkill from "../../components/ProgressSkill";
import TextCard from "../../components/TextCard";
import PropTypes from "prop-types";
import defaultAvatar from '../../images/default-placeholder.png'

export default class MyCV extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="my-cv">
        <Container>
          <Row>
            <Col xs="12" md="4" className="my-cv-side-page-left">
              <div id="my-cv-wrap-avata-name-box">
                <Avatar src={this.props.image} alt="my-avatar" size={250} />
                <div className="my-cv-wrap-name-box">
                  <b>{this.props.fullName}</b>
                </div>
              </div>
              <div className="my-cv-contact-box">
                <Row>
                  <Col xs="12">
                    <div className="my-cv-title-box">
                      <span>LIÊN HỆ</span>
                    </div>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-envelope fa-2x"
                        />
                      </Col>
                      <Col xs="9">
                        <p>{this.props.email}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-mobile-alt fa-2x"
                        />
                      </Col>
                      <Col xs="9">
                        <p>{this.props.phone}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-map-marker-alt fa-2x"
                        />
                      </Col>
                      <Col xs="9">
                        <p>{this.props.address}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-venus-mars fa-2x"
                        />
                      </Col>
                      <Col xs="9">
                        <p>{this.props.gender}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="my-cv-progress-special">
                {this.props.special.map((item) => {
                  return (
                    <ProgressSkill
                      key={item.id}
                      range={item.range}
                      skill={item.name}
                      labelColor="white"
                      width="calc(25vw)"
                    />
                  );
                })}
              </div>
            </Col>
            <Col xs="12" md="8" className="my-cv-side-page-right">
              <div className="my-cv-about-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-address-card fa-3x"
                >
                  {" Giới thiệu bản thân"}
                </i>
                <div className="my-cv-about-box-content">
                  <span>{this.props.about}</span>
                </div>
              </div>
              <div className="my-cv-education-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-graduation-cap fa-3x"
                >
                  {" HỌC VẤN"}
                </i>
                <div className="my-cv-education-box-content">
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-school fa-2x"
                    >
                      {" Trường: "}
                    </i>
                    <h2>{this.props.school}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-code-branch fa-2x"
                    >
                      {" Chuyên ngành: "}
                    </i>
                    <h2>{this.props.specialize}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-star-half-alt fa-2x"
                    >
                      {" Học lực: "}
                    </i>
                    <h2>{this.props.rating}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-clock fa-2x"
                    >
                      {" Thời gian: "}
                    </i>
                    <h2>
                      {`${this.props.timeStart} -> ${this.props.timeEnd}`}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="my-cv-experience-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-align-left fa-3x"
                >
                  {" KINH NGHIỆM"}
                </i>
                {this.props.experience.map((item) => {
                  return (
                    <TextCard
                      key={item.id}
                      fontSize={1}
                      iconColor="tomato"
                      textHeader={item.time}
                      title={`Công ty: ${item.company}`}
                      subline={`Vị trí: ${item.position}`}
                    >
                      {item.achievements}
                    </TextCard>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

MyCV.propTypes = {
  email: PropTypes.string,
  fullName: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
  gender: PropTypes.string,
  rating: PropTypes.string,
  about: PropTypes.string,
  school: PropTypes.string,
  specialize: PropTypes.string,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  moreInformation: PropTypes.string,
  experience: PropTypes.array,
  special: PropTypes.array,
};

MyCV.defaultProps = {
  email: "",
  fullName: "Your Name",
  phone: "",
  address: "",
  image: defaultAvatar,
  birthday: "",
  gender: "",
  rating: "",
  about: "",
  school: "",
  specialize: "",
  timeStart: "",
  timeEnd: "",
  moreInformation: "",
  experience: [
    {
      time: "",
      company: "",
      achievements: "",
      position: "",
      id: "root-id-1221",
    }
  ],
  special: [
    { name: "", range: 0, id: "root-id-1223" }
  ],
};
