import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageScalRotVariants, pageScalRotTransitions } from "../../../transitions";
import "./ExperiencePage.css";
import { Col, Row } from "reactstrap";

ExperiencePage.propTypes = {
  defaultValues: PropTypes.object,
};

export default function ExperiencePage(props) {
  const { experience } = props.defaultValues;
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageScalRotVariants}
      transition={pageScalRotTransitions}
    >
      <Row>
        <Col xs="12">
          <h1 className="experience-page__title">EXPERIENCE</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          {experience &&
            experience.map((item) => {
              return (
                <div key={item.id} className="experience-page__container">
                  <div className="experience-page__left">
                    <i className="fas fa-sun fa-2x experience-page__star-icon fa-spin" />
                  </div>
                  <div className="experience-page__right">
                    <Row>
                      <Col xs="12" md="4">
                        <b className="experience-page--root-color">
                          {item.company}
                        </b>
                      </Col>
                      <Col xs="12" md="4">
                        <p className="experience-page--root-color">
                          <b>Position: </b>
                          {item.position}
                        </p>
                      </Col>
                      <Col xs="12" md="4">
                        <b className="experience-page--root-color">Time:</b>
                        <i className="experience-page--root-color">
                          {` ${item.time.slice(5, 7)}
                          -${item.time.slice(0, 4)}`}
                        </i>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className="experience-page__achievenments-box"
                        xs="12"
                      >
                        <span className="experience-page__achievenments experience-page--root-color">
                          {item.achievements}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
        </Col>
      </Row>
    </motion.div>
  );
}
