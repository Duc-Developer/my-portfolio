import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Navbar,
  NavbarBrand,
  NavbarText,
  Nav,
  NavItem,
} from "reactstrap";
import Avatar from "../../../components/Avatar";
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
import { useHistory, NavLink } from "react-router-dom";
import { useEffect } from "react";
import * as firebase from "firebase";
import ProjectForm from "../ProjectForm";
import KnowledgesForm from "../KnowLedgesForm";

// const userSchema = {
//   uid: null,
//   email: "",
//   fullName: "",
//   phone: "",
//   address: "",
//   avatar: null,
//   birthday: "",
//   gender: "nam",
//   rating: "",
//   about: "",
//   school: "",
//   specialize: "",
//   timeStart: "",
//   timeEnd: "",
//   moreInformation: "",
//   experience: [
//     {
//       time: "",
//       company: "",
//       achievements: "",
//       position: "",
//       id: ids.generate(),
//     },
//   ],
//   special: [{ name: "", range: 0, id: ids.generate() }],
//   knowledges: ["google ads", "photoshop"],
//   project: [
//     { name: "", github: "", website: "", id: ids.generate(), information: "" },
//   ],
// };

export default function ProfileForm(props) {
  const { defaultValues } = props;
  const { control, handleSubmit, errors, setValue } = useForm({
    defaultValues,
  });
  const [imgUrl, setImg] = useState(
    !defaultValues.avatar ? defaultAvatar : defaultValues.avatar
  );
  const [mobiStatus, setStatus] = useState(null); //experience, special
  const [userCurrent, setUserCurrent] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  let imgUpload = useRef(false);

  const onSubmit = (data) => {
    // dispatch(
    //   createMyCv({
    //     ...data,
    //     uid: userCurrent.uid,
    //   })
    // );
    console.log(data);
  };

  const handleClickImg = () => {
    imgUpload.current.click();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserCurrent(user);
      } else {
        history.push("/");
        return;
      }
    });
  }, [userCurrent]);

  return (
    <div className="profile-form">
      <Navbar
        className="nav-main-form-building"
        color="light"
        light
        fixed="top"
        expand="md"
      >
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/form-building/print-and-preview">PreView</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <div className="nav-bar-form-building-wrap">
            <Avatar src={!userCurrent ? defaultAvatar : userCurrent.photoURL} />
            <Button
              onClick={() => {
                firebase.auth().signOut();
              }}
              color="link"
            >
              Đăng xuất
            </Button>
          </div>
        </NavbarText>
      </Navbar>
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
                height="15em"
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
                <EducationForm control={control} setValue={setValue} />
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
            <Col xs="12" lg="8">
              <ProjectForm control={control} setValue={setValue} />
            </Col>
            <Col xs="12" lg="4">
              <KnowledgesForm control={control} setValue={setValue} />
            </Col>
          </Row>

          <Row>
            <Col className="submit-button-wrap" xs="12">
              <ButtonGroup>
                <Button color="primary" type="submit">
                  Update
                </Button>
                <Button
                  onClick={() => {
                    history.push("/form-building/print-and-preview");
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
