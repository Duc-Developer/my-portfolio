import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import { pageScaleVariants, pageScaleTransitions } from "../../../transitions";
import "./AboutPage.css";

AboutPage.propTypes = {
  about: PropTypes.string,
  address: PropTypes.string,
  birthday: PropTypes.string,
  email: PropTypes.string,
  fullName: PropTypes.string,
  gender: PropTypes.string,
  phone: PropTypes.string,
};

export default function AboutPage(props) {
  const { about, address, birthday, email, fullName, gender, phone } = props;
  return (
    <motion.div 
    initial="out" 
    animate="in" 
    exit="out" 
    transition={pageScaleTransitions}
    variants={pageScaleVariants}>
      <Row>
        <Col xs="12">
          <h1 className="about-page__title">GIỚI THIỆU</h1>
        </Col>
        <Col xs="12">
          <div className="about-page__about-infor">
            <ul>
              <li>
                <b>Name: </b>
                <span>{fullName}</span>{" "}
              </li>
              <li>
                <b>Birthday: </b> 
                <span>{
                `${birthday.slice(8, 10)}
                -${birthday.slice(5,7)}
                -${birthday.slice(0, 4)}`
                }</span>
              </li>
              <li>
                <b>Email: </b>
                <span>{email}</span>
              </li>
              <li>
                <b>Address: </b>
                <span>{address}</span>
              </li>
              <li>
                <b>Phone: </b>
                <span>{phone}</span>
              </li>
              <li>
                <b>Gender: </b>
                <span>{gender}</span>
              </li>
            </ul>
          </div>
          <span className="about-page__about-content">{about}</span>
        </Col>
      </Row>
    </motion.div>
  );
}
