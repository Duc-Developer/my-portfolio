import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import defaultAvatar from "../../../images/default-placeholder.png";
import "./ProfileForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FileController from "../../../components/Fields/FileController";
import { useRef } from "react";
import ContactForm from "../ContactForm";
import TextFieldController from "../../../components/Fields/TextFieldController";
import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";
import SpecialForm from "../SpecialForm";
import { useDispatch } from "react-redux";
import { createMyCv } from "../../../actions";

const defaultValues = {
  email: "",
  fullName: "",
  phone: "",
  address: "",
  avatar: {},
  birthday: "",
  gender: "nam",
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
      id: "dfeeds",
    },
  ],
  special: [{ name: "", range: 0, id: "daagdfg" }],
};

export default function ProfileForm() {
  const { control, handleSubmit, errors, setValue } = useForm({
    defaultValues,
  });
  const [imgUrl, setImg] = useState(defaultAvatar);
  const [mobiStatus, setStatus] = useState(null); //experience, special
  const dispatch = useDispatch();
  let imgUpload = useRef(false);

  const onSubmit = (data) => {
    dispatch(createMyCv(data));
  };

  const handleClickImg = () => {
    imgUpload.current.click();
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <Col className="avatar-container" xs="12" md="4" lg="3">
              <Button color="link" onClick={handleClickImg}>
                <div className="avatar-wrap">
                  <img src={imgUrl} alt="avatar" className="avatar" />
                </div>
                <FileController
                  control={control}
                  style={{ display: "none" }}
                  innerRef={imgUpload}
                  onChange={(file) => {
                    let src = URL.createObjectURL(file);
                    setImg(src);
                  }}
                  name="avatar"
                />
              </Button>
            </Col>
            <Col xs="12" md="8" lg="9">
              <ContactForm control={control} errors={errors} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Container className="separator-line">
                <i
                  className="fas fa-angle-double-right fa-lg"
                  style={{ color: "#87CEFA" }}
                />
                <i
                  className="fab fa-react fa-3x fa-spin"
                  style={{ color: "#87CEFA" }}
                />
                <i
                  className="fas fa-angle-double-left fa-lg"
                  style={{ color: "#87CEFA" }}
                />
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <TextFieldController
                type="textarea"
                lableName="Giới thiệu:"
                lableNameColor="white"
                control={control}
                errors={{}}
                rules={{}}
                name="about"
                id="text-about"
                placeholder="Một chút thông tin về bạn sẽ rất tuyệt..."
              />
            </Col>
            <Col xs="12" lg="6">
              <div className="on-default-screen">
                <EducationForm control={control} errors={errors} />
              </div>
              <div className="on-mobile-screen group-button-control-mobi">
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => {
                      setStatus("education");
                    }}
                  >
                    <span>Education</span>
                    {(errors.school || errors.rating) && (
                      <i style={{ color: "red" }} className="fas fa-asterisk" />
                    )}
                  </Button>
                  <Button
                    color="info"
                    onClick={() => {
                      setStatus("experience");
                    }}
                  >
                    <span>Experience</span>
                  </Button>
                  <Button
                    color="success"
                    onClick={() => {
                      setStatus("special");
                    }}
                  >
                    <span>Special</span>
                  </Button>
                </ButtonGroup>
              </div>
              {mobiStatus === "education" && (
                <div className="on-mobile-screen">
                  <EducationForm control={control} errors={errors} />
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className="on-default-screen">
                <ExperienceForm setValue={setValue} control={control} />
              </div>
              {mobiStatus === "experience" && (
                <div className="on-mobile-screen">
                  <ExperienceForm setValue={setValue} control={control} />
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className="on-default-screen">
                <SpecialForm setValue={setValue} control={control} />
              </div>
              {mobiStatus === "special" && (
                <div className="on-mobile-screen">
                  <SpecialForm setValue={setValue} control={control} />
                </div>
              )}
            </Col>
          </Row>

          <Row>
            <Col className="submit-button-wrap" xs="12">
              <ButtonGroup>
                <Button
                  outline
                  onClick={() => {
                    // do print with react-to-print npm
                  }}
                  color="info"
                >
                  Print
                </Button>
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  outline
                  onClick={() => {
                    // do show CV
                  }}
                  color="success"
                >
                  PreView
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}
