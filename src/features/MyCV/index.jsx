import React, { Component } from "react";
import "./MyCV.css";
import { Row, Container, Col } from "reactstrap";
import Avatar from "../../components/Avatar";
import ProgressSkill from "../../components/ProgressSkill";
import TextCard from "../../components/TextCard";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/default-placeholder.png";
import firebase from "firebase";
import { database } from "../../firebase";

export default class MyCV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        database
          .ref("users/" + user.uid)
          .once("value")
          .then((snap) => {
            this.setState({
              ...this.state,
              data: snap.val(),
            });
          });
      }
    });
  }

  render() {
    const { data } = !this.state.data ? this.props : this.state;

    return (
      <div className="my-cv">
        <Container>
          <Row>
            <Col xs="12" md="4" className="my-cv-side-page-left">
              <div id="my-cv-wrap-avata-name-box">
                <Avatar src={data.avatar} alt="my-avatar" size={230} />
                <div className="my-cv-wrap-name-box">
                  <b>{data.fullName}</b>
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
                      <Col style={{ textAlign: "center" }} xs="12" xl="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-envelope fa-2x my-cv-icon-mobile"
                        />
                      </Col>
                      <Col style={{ textAlign: "center" }} xs="12" xl="9">
                        <div>
                          <p>{data.email}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="12" xl="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-mobile-alt fa-2x my-cv-icon-mobile"
                        />
                      </Col>
                      <Col style={{ textAlign: "center" }} xs="12" xl="9">
                        <div>
                          <p>{data.phone}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="12" xl="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-map-marker-alt fa-2x my-cv-icon-mobile"
                        />
                      </Col>
                      <Col style={{ textAlign: "center" }} xs="12" xl="9">
                        <div>
                          <p>{data.address}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12">
                    <Row>
                      <Col style={{ textAlign: "center" }} xs="12" xl="3">
                        <i
                          style={{ color: "rgb(142, 206, 210)" }}
                          className="fas fa-venus-mars fa-2x my-cv-icon-mobile"
                        />
                      </Col>
                      <Col style={{ textAlign: "center" }} xs="12" xl="9">
                        <div>
                          <p>{data.gender}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="my-cv-progress-special">
                {data.special &&
                  data.special.map((item) => {
                    return (
                      <ProgressSkill
                        key={item.id}
                        range={JSON.parse(item.range)}
                        skill={item.name}
                        labelColor="white"
                      />
                    );
                  })}
              </div>
              <Row>
                <Col xs="12">
                  <div className="my-cv-project-list-box">
                    <Row>
                      <Col xs="12">
                        <div className="my-cv-project-box-title">
                          <h3>My Project</h3>
                        </div>
                      </Col>
                    </Row>
                    {data.project &&
                      data.project.map((item, index) => {
                        return (
                          <div
                            key={item.id}
                            className="my-cv-project-list-item"
                          >
                            <Container>
                              <Row>
                                <Col xs="8" md="12" lg="8">
                                  <div>
                                    <b>{item.name}</b>
                                  </div>
                                </Col>
                                <Col xs="2" md="6" lg="2">
                                  <a target="_blank" href={item.website}>
                                    View
                                  </a>
                                </Col>
                                <Col xs="2" md="6" lg="2">
                                  <a target="_blank" href={item.github}>
                                    Code
                                  </a>
                                </Col>
                              </Row>
                            </Container>
                          </div>
                        );
                      })}
                  </div>
                </Col>
                <Col xs="12">
                  <div className="my-cv-knowledges-container">
                    <div className="my-cv-knowledges-title-container">
                      <h3>Knowledges</h3>
                    </div>
                    {data.knowledges &&
                      data.knowledges.map((item, index) => {
                        return (
                          <div key={index} className="my-cv-knowledges-item">
                            {item}
                          </div>
                        );
                      })}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="8" className="my-cv-side-page-right">
              <div className="my-cv-about-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-address-card fa-3x my-cv-icon-mobile"
                >
                  {" Giới thiệu bản thân"}
                </i>
                <div className="my-cv-about-box-content">
                  <span style={{ whiteSpace: "pre-line" }}>{data.about}</span>
                </div>
              </div>
              <div className="my-cv-education-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-graduation-cap fa-3x my-cv-icon-mobile"
                >
                  {" HỌC VẤN"}
                </i>
                <div className="my-cv-education-box-content">
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-school fa-2x my-cv-icon-mobile"
                    >
                      {" Trường: "}
                    </i>
                    <h2>{data.school}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-code-branch fa-2x my-cv-icon-mobile"
                    >
                      {" Chuyên ngành: "}
                    </i>
                    <h2>{data.specialize}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-star-half-alt fa-2x my-cv-icon-mobile"
                    >
                      {" Học lực: "}
                    </i>
                    <h2>{data.rating}</h2>
                  </div>
                  <div>
                    <i
                      style={{ color: "tomato" }}
                      className="fas fa-clock fa-2x my-cv-icon-mobile"
                    >
                      {" Thời gian: "}
                    </i>
                    <h2>{`${data.timeStart} -> ${data.timeEnd}`}</h2>
                  </div>
                </div>
              </div>
              <div className="my-cv-experience-box">
                <i
                  style={{ color: "#8B008B" }}
                  className="fas fa-align-left fa-3x my-cv-icon-mobile"
                >
                  {" KINH NGHIỆM"}
                </i>
                {data.experience &&
                  data.experience.map((item) => {
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
  data: PropTypes.object,
};

MyCV.defaultProps = {
  data: {
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
      },
    ],
    special: [{ name: "", range: 0, id: "root-id-1223" }],
  },
};
